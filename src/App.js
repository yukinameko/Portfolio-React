import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import nameko from './data/image/icon/nameko.png';
import Particles from 'react-particles-js';

const imgEzuka1 = require('./data/image/work/e-zuka.png');
const imgEzuka2 = require('./data/image/work/e-zuka-ai.png');
const imgEzuka3 = require('./data/image/work/e-zuka-error.png');
const imgIchannel1 = require('./data/image/work/i-channel.png');
const imgIchannel2 = require('./data/image/work/iOZ.png');
const imgFoT = require('./data/image/work/FOT.JPG');
const imgIoT1 = require('./data/image/work/IoT.JPG');
const imgIoT2 = require('./data/image/work/IoTSystemMap.jpeg');
const imgSche = require('./data/image/work/sche.png');

const internTitle = require('./data/intern/title.json');
const internData = require('./data/intern/data.json');
const skillTitle = require('./data/skill/title.json');
const skillData = require('./data/skill/data.json');

const particlesParam = {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": false
      }
    },
    "size": {
      "value": 10,
      "random": true
    },
    "move": {
      "direction": "bottom",
      "out_mode": "out"
    },
    "line_linked": {
      "enable": false
    }
  },
  "interactivity": {
    "events": {
      "onclick": {
        "enable": true,
        "mode": "remove"
      }
    },
    "modes": {
      "remove": {
        "particles_nb": 10
      }
    }
  }
};

const CreateTable = (props) => {
  return (
    <table >
      <tr>
        {props.title.map(v => (<th>{v}</th>))}
      </tr>
      {
        props.data.map(d => (<tr>
          {props.title.map(v => {
            return <td>{d[v].split('\n').map(v => (<span>{v}<br/></span>))}</td>
          })}
          </tr>))
      }
    </table>
    );
}

const Image = (props) => {
  return (
    <div className="images">
    {
      props.className ? props.item.map(v => {
        return (<img src={v} className={props.className}/>);
      }) : props.item.map(v => {
        return (<img src={v}/>);
      })
    }
    </div>
    );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesParam}/>
        <ul id="nav">
          <li><a href="#intro">Profile</a></li>
          <li><a href="#history">History</a></li>
          <li><a href="#skill">Skill</a></li>
          <li><a href="#del">Work</a></li>
        </ul>
        <header className="App-header">
          <div className="Background-App-logo">
            <img src={nameko} className="App-logo" alt="logo" />
          </div>
          <h1 id="intro">Profile</h1>
          <dl className="contents">
            <dt>Name</dt> <dd>大門 由樹 Daimon Yoshiki / なめこ Nameko</dd>
            <dt>Birthday</dt> <dd>1998/1/16</dd>
            <dt>From</dt> <dd>富山県</dd>
            <dt>Belong</dt> <dd>筑波大学 情報学群 情報科学類 4年 知能情報メディア専攻</dd>
          </dl>

          <h1 id="history">History</h1>
            <h2>Education</h2>
              <dl className="contents">
                <dt>2013/4~2018/3</dt> <dd>石川工業高等専門学校 電子情報工学科</dd>
                <dt>2018/4~</dt> <dd>筑波大学 情報学群 情報科学類</dd>
              </dl>
            <h2>Internship</h2>
              <CreateTable title={internTitle} data={internData}/>
            <h2>Award</h2>
              <ul>
                <li>第3回学生スマートフォンアプリコンテスト<br/>プレゼンテーション賞</li>
                <li>e-ZUKA スマートフォンアプリコンテスト 2018<br/>ヌーラボ賞・福岡県済生会飯塚嘉穂病院賞</li>
              </ul>

          <h1 id="skill">Skill</h1>
            2019年4月現在
            <CreateTable title={skillTitle} data={skillData}/>
            
          <h1 id="del">Work</h1>
            <div className="box">
              <h2 className="del" id="e-zuka">体外式時間感覚補正器(iOSアプリ)</h2>
                <h3>概要</h3>
                  <p className="contents">
                    「e-ZUKA スマートフォナプリコンテスト 2018」にて作成．ヌーラボ賞・福岡県済生会飯塚嘉穂病院賞を受賞
                    過去のユーザの見積もり時間と実時間の傾向からユーザ自身が時間予測を正確に行えるように支援するタスク管理アプリ．<br/>
                    ユーザはこれから行う予定のタスクの名称・見積もり時間などを登録し，見積もり時間から全てのタスクを終えるまでの予定時間が提示される．<br/>
                    基本的には一般的なタスク管理のアプリとして機能するが，見積もり時間入力の際に，過去の同一タスク・あるいは全タスクの時間見積もり傾向から実際にかかると想定される時間が提示される．それを元に毎回の時間の見積もりをユーザ自身が見直すことによってユーザの時間見積もりの精度が上がっていくことが期待できる．<br/>
                    また，過去数週間分の見積もり誤差の平均を確認することができ，全体的に自分がどの程度ずれて見積もっているのか，どの程度改善されているのかを知ることができる．<br/>
                    時間の見積もりが甘く予定通りにことを進めるのが苦手な人が多いのをなんとかしたいといった考えが出発点．
                  </p>
                  <Image className="phone" item={[imgEzuka1, imgEzuka2, imgEzuka3]} />
                <h3>開発詳細</h3>
                  <p className="contents">
                    主に操作画面作成と学習・予測モデルの作成部分に分かれ，分担作業を行なった．<br/>
                    データの見える化を主軸に考え，主にグラフで自分の傾向や改善の軌跡を可視化した．<br/>
                    見積もり傾向からの実時間予測には多項式回帰分析を用い，データ数に応じて次数を変えることで過学習が起こらないようにしている．また，最適化には勾配降下法を適用した．<br/>
                  </p>
                <h3>開発期間</h3>
                  2ヶ月
                <h3>開発環境や使用言語</h3>
                  <p className="contents">
                    Xcodeを使用し，Swiftで開発．グラフの表示にはiOS-Chartsを使用．
                  </p>
            </div>

            <div className="box">
              <h2 className="del" id="i-channel">i-channel(クラス内総合SNS)</h2>
                <h3>概要</h3>
                  <p className="contents">
                  クラス内での総合SNS．「特定の誰かではなく，クラス内全員に対して質問をしたい」「1度された質問に対しての回答を共有したい」といった考えが出発点．
                  </p>
                  <br/>機能一覧<br/>
                  <ul className="contents">
                    <li>Twitterアカウントでのログイン</li>
                    <li>各授業の課題に対する質問と回答</li>
                    <li>質問・回答の検索</li>
                    <li>3D空間内の自由な移動とチャットによる会話</li>
                  </ul>
                  <Image item={[imgIchannel1, imgIchannel2]} />
                <h3>開発詳細</h3>
                  <p className="contents">
                  クラスのほぼ全員が利用していたTwitterのリストを参照することでログイン機能を実装し，外部からのログインを防いだ．<br/>
                  質問・回答ページでは質問や回答をデータベースで管理し，科目名や学年での検索を行えるようにした．また，匿名での投稿が可能なように実装した．<br/>
                  某アニメ映画のようなものを作りたいという意見を取り入れ，自分のアバターを持ち自由に移動が可能な3D空間とリアルタイムでのチャット機能を実装．空間内のオブジェクトやアバターはチームメンバーが作成した3Dモデルを使用した．また，アバターの移動データもNode.jsで発信・取得した．<br/>
                  移動には通常のFPSゲームと同様にWASDキーを利用し，特定のキーを押すことでチャットの入力エリアにフォーカスするようにした．また，チャット領域はescapeキーで表示・非表示を自由に切り替えられるように実装した．<br/>
                  その他，SQLインジェクションやXSS等のメジャーな攻撃に対し，適切なエスケープを行なって無効化した．<br/>
                  開発はチームで行い，自分はTwitterログイン，課題に対する質問と回答，チャット機能等のサーバサイドを主に担当．その他全体の進捗の管理と適宜フォローを行なった．
                  </p>
                <h3>開発期間</h3>
                  3ヶ月
                <h3>開発環境や使用言語</h3>
                  <p className="contents">
                    CentOS 6系を使用し，Google Chrome, FireFoxで動作させることを前提とした．<br/>
                    サーバサイドではPHP,Node.jsを用い，動的なリアルタイム処理が必要となる部分ではNode.js，それ以外のログインや質問や回答の投稿を行う部分ではPHPで処理を行うように，Nginxで分岐を行なった．また，データベースはMySQLを利用した．<br/>
                    クライアントサイドではD3.jsとjQueryを用い，Node.jsによって得られたデータとの連携を行なった．
                  </p>
            </div>

            <div className="box">
              <h2 className="del" id="FOT">Full of Trick(FPSゲーム)</h2>
                <h3>概要</h3>
                  <p className="contents">
                    落ちているものや施設内の機器を組み合わせて任意の現象を起こして敵を倒す(やり過ごす)ことで施設からの脱出を目指すFPSゲーム．
                    「周りにあるものを組み合わせて目的を達成する」「目的を達成するに至る方法が1つに限定されない」といったゲームを作成したいという考えが出発点．
                  </p>
                  <Image item={[imgFoT]} />
                <h3>開発詳細</h3>
                  <p className="contents">
                    ものを拾う・使う・組み合わせる等の動作や，敵の挙動・操作キャラの発見に至るアルゴリズムなどを，Unityの当たり判定をうまく利用することで全て自作した．また，オブジェクト指向プログラミングを意識し，クラス継承などを効果的に用いることで，基本的な機能はそのままに，特定の組み合わせでのみ現象が起こるように実装を行なった．<br/>
                    開発はチームで行い，自分を含める2名が全てのプログラミングを行なった．途中ペアプログラミング等を試しながらの開発となった．
                  </p>
                <h3>開発期間</h3>
                  2ヶ月
                <h3>開発環境や使用言語</h3>
                  <p className="contents">
                    Windows8でUnityのC#を用いて開発を行なった．
                  </p>
            </div>

            <div className="box">
              <h2 className="del" id="tetsuris">TETSURIS(回路テトリスゲーム)</h2>
                <h3>概要</h3>
                  <p className="contents">
                    FPGA，あるいはマイコンを使ってチームで作品を作る，といった課題にて作成．
                    テトリス系の落ち物パズルのブロックをKinnectによる動作認識及び手元のデバイスで操作する．
                    既存のパズルゲームとの差別化のため，ブロックに導線，抵抗，電源があり，ブロックに描かれた導線をつなげて一つの回路を完成させることでブロックが消える仕様にした．
                    回路内に含まれる素子の数によって得られる点数が変化する．ただし回路内に電源がなければブロックは消えず，逆に電源しかない場合はその電源の数分だけ点数が減点される．
                  </p>
                <h3>開発詳細</h3>
                  <p className="contents">
                    マイコン，ゲーム，Kinnect部に分かれ，自分は落ち物パズルのシステムやエフェクトの実装と各部分の実装の統合を行った．
                  </p>
                <h3>開発期間</h3>
                  3~4ヶ月
                <h3>開発環境や使用言語</h3>
                  <p className="contents">
                    Windows PCとArduino Unoを使用．ゲーム部はUnity C#を使用した．
                  </p>
            </div>

            <div className="box">
              <h2 className="del" id="MOMLY">MOMLY(アラームアプリ)</h2>
                <h3>概要</h3>
                  <p className="contents">
                    「第3回学生スマートフォンアプリコンテスト」にて作成
                    「この時間までには電車が出なければいけない」という時間を設定することで，最寄駅の電車の発車時刻から起床時間を逆算して起こすアラームアプリ．その時の天候によってアラームが鳴る時間が変わり(悪天候時は早く鳴る)，起床できなかった場合には画像フォルダからランダムが画像が1つ消える．<br/>
                    「何時何分の電車に乗るから何時に起きないといけないといった計算が面倒」「天気によって移動手段などに変化があるため起きたい時間が違う」「起きなかった場合の罰則がないと起きれない」といった考えが出発点．
                  </p>
                <h3>開発詳細</h3>
                  <p className="contents">
                    設定された時刻より前に発車する最も遅い電車を求め，GPSから現在地，現在地からその場所の天気を調べ，その天気に応じてアラームが鳴る時間が変わるように実装した．<br/>
                    また，アラーム鳴動時に画像フォルダ内からランダムで選ばれた画像が表示され，止められなかった場合その画像を消去することで，その画像との最後の別れを演出した．<br/>
                    チームでの開発であったが，実装は全て自分一人で行った．GPSで得たデータをもとに天気のAPIを使ってその場所の天候状況を調査した．
                  </p>
                <h3>開発期間</h3>
                  1ヶ月
                <h3>開発環境や使用言語</h3>
                  <p className="contents">
                    Javaを用いてAndroid 5系で動作するように開発を行った．IDEとしてEclipseを利用した．<br/>
                  </p>
            </div>

            <div className="box">
              <h2 className="del" id="iot">サーモカメラ搭載型IoTシステム</h2>
                <h3>概要</h3>
                  <p className="contents">
                    サーモカメラを搭載した安価かつ小型のIoTシステム．<br/>
                    「汎用性の高いサーモカメラは大型かつ高価なため，簡単な実験やそれほどの性能を必要とはしないシステムへの搭載には不向きである」といった考えが出発点．
                  </p>
                  <Image item={[imgIoT1, imgIoT2]} />
                <h3>開発詳細</h3>
                  <p className="contents">
                    SDKが公開されているUSB接続で動く小型のサーモカメラをRaspberry Piに接続することによって遠隔からの操作を可能にした．<br/>
                    Raspberry Piでサーモカメラとカメラモジュールからの映像を取得し，接続中の外部の端末に送信するように実装し，そのデータを受信・解析することで性能の向上を行った．<br/>
                    データの損失を避けるためデータの送受信にはWebSocketを用い，Wi-Fi経由で起動，終了，設定の変更，データの送受信を行えるようにした．<br/>
                    データの解析では，フレームレートの計測や，2つのカメラ間の撮影範囲のズレの修正，撮影タイミングのズレなどの補正を行った．
                  </p>
                <h3>開発期間</h3>
                  8ヶ月
                <h3>開発環境や使用言語</h3>
                  <p className="contents">
                    Raspberry PiのOSにはRaspbianを用い，C++を使ってシステムを実装した．画像データの処理にOpenCVを用いた．<br/>
                    また，データの受信や解析にはPythonを用いた．
                  </p>
            </div>

            <div className="box">
              <h2 className="del" id="sys">日時調整システム(プロトタイプ)</h2>
                <h3>概要</h3>
                  <p className="contents">
                    日付だけではなく実際に開催する時間も含めてまとめて調整が可能なwebアプリのプロトタイプ．<br/>
                    「(特に飲み会や遊ぶ場合において)時間をできる限り確保したい」「1時間ずれるだけで参加者が増えるのではないか」といった考えが出発点．<br/>
                    ユーザが入力する際に，各日付の参加が可能な時間の範囲を指定して日程の調整が行われる．参加者最大かつ開催時間が最大となるように日程の候補が算出される．<br/>
                    時間の指定は，可能な時間の始点と終点をクリックorタップすることによって行い，中抜けする場合の調整も可能．
                  </p>
                  <Image item={[imgSche]} />
                <h3>開発詳細</h3>
                  <p className="contents">
                    少しでも入力の手間や誤操作を減らし，クロスプラットフォームを目指すために時間の始点・終点での入力方法を考案した．<br/>
                    始点としてクリック(タップ)した領域を保存しておき，終点選択時に始点-終点間の領域を全て塗りつぶすように実装した．<br/>
                    プロトタイプであるため，サーバサイドの処理は行わず，クライアントサイドのみで実行できるようにした．
                  </p>
                <h3>開発期間</h3>
                  2週間
                <h3>開発環境や使用言語</h3>
                  <p className="contents">
                    macOSのGoogle Chrome上で動くように実装し，開発には主にjQueryを用いた．
                  </p>
            </div>
        </header>
      </div>
    );
  }
}

export default App;
