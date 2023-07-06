export default function ContentModel() {
  return (
    <>
      <Table />
    </>
  );
}

function Table() {
  const handleClickP = () => {
    window.alert("Pタグクリック");
  };

  return (
    <table>
      <tbody>
        <tr>
          <th>見出しのセル</th>
          <td>データのセル</td>
        </tr>
      </tbody>
      <p onClick={handleClickP}>Pテキストだよ</p>
    </table>
  );
}
