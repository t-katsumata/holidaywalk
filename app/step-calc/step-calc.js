"use client"

import "@/styles/style.scss";
import { faChevronRight, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Sawarabi_Gothic } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const sawarabiGothic = Sawarabi_Gothic({
  weight: ['400'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-sawarabiGothic',
});

export default function Page() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm({
    defaultValues: {
      height: 160,
      weight: 55,
      stride: 0.37,
      walkSpeed: "3.5,85"
    }
  });

  // 計算結果用 state
  const [result, setResult] = useState(null);

  const handleCalc = () => {
    const { height, weight, stride, walkSpeed } = getValues();
    const [met, speed] = walkSpeed.split(",");
    const strideLength = Math.round(height * stride);

    // 出力テーブル用データをまとめて生成 (1～40km)
    const rows = [...Array(40)].map((_, i) => {
      const km = i + 1;
      const steps = Math.floor((km * 1000) / (strideLength / 100));
      const time = (km * 1000) / Number(speed); // 分
      const hour = Math.floor(time / 60);
      const min = String(Math.floor(time % 60)).padStart(2, "0");
      const sec = String(Math.floor((time - Math.floor(time)) * 60)).padStart(2, "0");
      const kcal = Math.round(1.05 * Number(met) * (time / 60) * weight);

      return {
        km: km.toFixed(1),
        steps,
        time: `${hour}:${min}:${sec}`,
        kcal,
      };
    });

    setResult({
      strideLength,
      rows,
    });
  };

  // 共通のテーブル描画コンポーネント
  const ResultTable = ({ rows }) => (
    <table className="stepOutputTable__body">
      <thead>
        <tr>
          <th>歩行距離<br />(km)</th>
          <th>推定歩数<br />(歩)</th>
          <th>推定歩行時間<br />(h:mm:dd)</th>
          <th>推定消費<br />カロリー<br />(kcal)</th>
        </tr>
      </thead>
      <tbody>
      {rows.map((row, i) => (
        <tr key={i}>
          <td>{row.km}</td>
          <td>{row.steps}</td>
          <td>{row.time}</td>
          <td>{row.kcal}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );

  // 入力テーブルがスクロール可能なときだけ影を出す
  useEffect(() => {
    if (typeof window !== "undefined") {
      const container = document.querySelector('.stepInputTableShadow');
      const wrapper = document.querySelector('.stepInputTableWrapper');

      function updateShadows() {
        const { scrollLeft, scrollWidth, clientWidth } = wrapper;

        container.classList.toggle('shadow-left', scrollLeft > 0);
        container.classList.toggle('shadow-right', scrollLeft + clientWidth < scrollWidth);
      }

      wrapper.addEventListener("scroll", updateShadows);
      window.addEventListener("resize", updateShadows);
      updateShadows(); // 初期化

      // クリーンアップ
      return () => {
        wrapper.removeEventListener("scroll", updateShadows);
        window.removeEventListener("resize", updateShadows);
      };
    }
  }, []);

  return (
    <>
      <section className="commonSection">
        <h2 className="commonSection__heading">身長・体重・歩行スタイル入力</h2>
        <form onSubmit={handleSubmit(handleCalc)}>
          <div className="stepInputTableShadow">
            <div className="stepInputTableWrapper">
              <table className={`stepInputTable ${sawarabiGothic.variable}`}>
                <thead>
                  <tr>
                    <th>項目</th>
                    <th>値</th>
                    <th>概要</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>身長</td>
                    <td>
                      <input
                        type="number"
                        id="height"
                        {...register("height", {
                          required: {
                            value: true,
                            message: "100～230の整数を入力してください。"
                          },
                          min: {
                            value: 100,
                            message: "100cm以上の身長を入力してください。"
                          },
                          max: {
                            value: 230,
                            message: "230cm以下の身長を入力してください。"
                          },
                        })}
                      />cm<br />
                      {errors.height && <span className="inputError">{errors.height.message}</span>}
                    </td>
                    <td>歩幅の算出で使用します。<br />（入力範囲：100～230）</td>
                  </tr>
                  <tr>
                    <td>体重</td>
                    <td>
                      <input
                        type="number"
                        id="weight"
                        {...register("weight", {
                          required: {
                            value: true,
                            message: "20～150の整数を入力してください。"
                          },
                          min: {
                            value: 20,
                            message: "20kg以上の体重を入力してください。"
                          },
                          max: {
                            value: 150,
                            message: "150kg以下の体重を入力してください。"
                          },
                        })}
                      />kg<br />
                      {errors.weight && <span className="inputError">{errors.weight.message}</span>}
                    </td>
                    <td>消費カロリーの算出で使用します。<br />（入力範囲：20～150）</td>
                  </tr>
                  <tr>
                    <td>歩き方</td>
                    <td>
                      <select {...register("stride")}>
                        <option value="0.37">普通に歩く</option>
                        <option value="0.45">大股で歩く</option>
                      </select>
                    </td>
                    <td>歩幅の算出で使用します。<br />普通に歩く：身長 × 0.37<br />大股で歩く：身長 × 0.45</td>
                  </tr>
                  <tr>
                    <td>歩行速度</td>
                    <td>
                      <select {...register("walkSpeed")}>
                        <option value="3,67">ふらふら歩き</option>
                        <option value="3.5,85">通常歩行</option>
                        <option value="4.3,93">やや速歩</option>
                        <option value="5,107">かなり速歩</option>
                      </select>
                    </td>
                    <td>歩行時間と消費カロリーの算出で使用します。<br />ふらふら歩き：平地、67m/分、3メッツ<br />通常歩行：平地、75～85m/分、3.5メッツ<br />やや速歩：平地、93m/分、4.3メッツ<br />かなり速歩：平地、107m/分、5メッツ</td>
                  </tr>
                  <tr>
                    <td>歩幅</td>
                    <td>{result ? result.strideLength : "-"} cm</td>
                    <td>『身長 × 歩き方』で算出。</td>
                  </tr>
                  <tr>
                    <td className="calcButton" colSpan="3">
                      <button type="submit">
                        計算
                        <FontAwesomeIcon icon={faChevronRight} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className={`notes ${sawarabiGothic.variable}`}>※メッツ（METs：Metabolic equivalents）：代謝当量。運動の強さを示す指標。人が安静にしている状態での消費カロリーを「1Met」とした時の各種運動の強さを表現する。</p>
        </form>
      </section>

      <section className="commonSection">
        <h2 className="commonSection__heading">推定歩数、推定歩行時間、推定消費カロリー出力</h2>
        {result
          ? (
              <>
                <div className={`stepOutputTable ${sawarabiGothic.variable}`}>
                  <ResultTable rows={result.rows.slice(0, 20)} />
                  <ResultTable rows={result.rows.slice(20, 40)} />
                </div>
                <p className={`notes ${sawarabiGothic.variable}`}>※推定歩数(1km当たり) ⇒ 1000(m) ÷ ( 歩幅(cm) ÷ 100 )<br />※推定歩行時間(1km当たり) ⇒ 1000(m) ÷ 歩行速度(m/分)<br />※推定消費カロリー ⇒ 1.05 × メッツ × 時間(分) × 体重(kg)</p>
              </>
            )
          : (
            <p>「計算」ボタンをクリックすると、こちらに計算結果が出力されます。</p>
          )
        }
      </section>

      <section className="commonSection">
        <h2 className="commonSection__heading">参考サイト</h2>
        <p>
          <Link className="regularLink" href="https://kirei-kenko.or.jp/walking/stride-height" target="_blank">きれい健康ネット<FontAwesomeIcon icon={faUpRightFromSquare} /></Link>
        </p>
        <p>
          <Link className="regularLink" href="https://tomari.org/main/java/kenkou_hokousuu.html" target="_blank">歩数による消費カロリー計算<FontAwesomeIcon icon={faUpRightFromSquare} /></Link>
        </p>
        <p>
          <Link className="regularLink" href="https://www.kao.com/jp/nutrition/meal-life/about-hoco/hoco01/" target="_blank">歩行と健康（花王株式会社）<FontAwesomeIcon icon={faUpRightFromSquare} /></Link>
        </p>
      </section>
    </>
  );
};
