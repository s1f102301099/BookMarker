import styles from "./index.module.css"

function IndexPopup() {
  const [data, setData] = useState("")

  return <div className={styles.container}><h1>現在のページを保存しますか</h1></div>
<div class="textInput">
  <div classname=styles.container>
  <form action='送信先' method='送信メソッド'></form>
  <input type="submit" value="フォーム"></input>
  <div></div>
</div>

<div>
  <div classname=styles.container></div>
  <button></button>
  <div>保存</div>
</div>
  
}

export default IndexPopup
