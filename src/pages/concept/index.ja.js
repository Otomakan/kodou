import React from "react"
// import { Link } from "gatsby"
import Layout from "../../components/layout"
import YouTube from 'react-youtube'
import SEO from "../../components/seo"
import LinesImage from './LinesImage'
import WatchingLinesImage from './WatchingLinesImage'

const IndexPage = (props) => (
  <Layout location={props.location}>
      <SEO title="Concept" />
      <h1>Concept</h1>
      <h2>Story</h2>
      <div className="content">
        <p>1917 年、サイエンス紙にフィリップローランという冒険家が寄稿した文章がある。</p> 
        <div className="quote">かれこれ 20 年も前のことになるだろうか、ホタルがいっせいに光るのを見たことがあった。いや、ただそう思っただけのことなのかもしれない。私は、自分の目がどうしても信じられなかった。というのも、 そんな現象は、あらゆる自然法則に反することになるからだ。</div>
        <p>ホタルといえば日本の夏の風物詩であり、子どもから大人まで、誰しもが美しさを感じてしまう生き物だ。</p> 
        <div className="quote">「こっちのみーずはあーまいぞー、あっちのみーずはかーらいぞー」という歌を知っているヒトも多いだろう。しかし、何匹も、何百匹も、何万匹ものホタルが同期して光るなどという現象は見たことがない。 実際、上のフィリップローラン氏以外にも、ホタルの同期明滅現象を目撃した冒険家や科学者は多い。ある冒険家は、「目が痙攣してしまっていると思った」と語っている。</div>
        <p>パプアニューギニアに、「ホタルの木」と呼ばれる有名な一本の木がある。夏になると、数万匹ものホタルがこの一本の木に集まり、同期しながら光っている姿を目撃することになる。この姿を見た人は、誰しもが、この世界の神秘と美しさに圧倒される。 </p>
        <figure className="image is-16by9">
          <YouTube
            videoId="Ls6jJnJ2CuQ"                  // defaults -> null
            className="youtube-video full"                // defaults -> null
            // containerClassName="youtube-video-container"
          />  
        </figure>
        <p>このホタルの映像を見たときに、私たちは、ひとつの仮説を持った。</p>
        <div className="quote">ホタルの光が同期するのであれば、人間のコドウも同期しないのだろうか。</div>
        <p>そこで、実際に、人間の鼓動を光に変換する鼓動デバイスを作った。人間の身体は、1分間に70回、1日に10万回、生涯に20億回、心臓が鼓動する。その度に、全身に血液が行き渡る。鼓動デバイスは、その血液が手の指先に届いた瞬間、脈拍センサーで血流情報を取得し、血液の流れを光に変換する。</p>
        <LinesImage/>
        <WatchingLinesImage/>

        <p>私たちは、この鼓動デバイスを活用し、日本中・世界中の至るところで、ヒトの鼓動を光として可視化していく。その時、1人、2人、5人、10人、100人、1000人と規模を大きくしながら、実際に、ヒトの鼓動が同期してしまうことはありえるのか。それはどんな場合に起きてしまうことなのか、世界各地で実験を行っていく。</p>

        <p>もし、この鼓動のリズムが同期してしまう瞬間を目撃してしまったとしたら、何を感じてしまうのだろうか。人間とは何か、自己とは何か、その定義自体が揺れ動いてしまうような体験になるのだろうか。正直、分からない。このプロジェクトを運営する私たち自身が、この同期が起きてしまう瞬間、鼓動の光が重なり合ってしまう瞬間を目撃したくてしょうがないのだ。その瞬間の美しさに恋い焦がれてしまっている。</p>

        <p>最後に、”Earth Egg” という作品が、熊本県、阿蘇で生まれたときの映像を見てほしい。このときは、3歳児から、70代の女性まで幅広い人たちが、ひとつの球を自分たちの鼓動で照らした。その時の映像だ。私には同期してしまっているようにも見える。あなたには、この映像がどう見えるだろうか。</p>
      
        <figure className="image is-16by9">
          <YouTube
            videoId="sAatS_Ym7tI"                  // defaults -> null
            className="youtube-video full"                // defaults -> null
            // containerClassName="youtube-video-container"
          />  
        </figure>

        <p>もし、この映像に何かを感じる人がいたら、ぜひ、この営みに参加してもらえたら嬉しい。最後に一言述べて、この文章を終わりにしようと思う。</p>

        <div className="quote"> Your heartbeats enlight the world, the world is full of Synchronicity.<br/> 
        あなたの鼓動は世界を照らす。世界はシンクロニシティで溢れている。 </div>
      </div>
  
  </Layout>
)

export default IndexPage