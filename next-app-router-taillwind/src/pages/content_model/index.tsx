export default function ContentModel() {
  return (
    <>
      <Table />
    </>
  );
}

function Table() {
  return (
    <table>
      <tbody>
        <tr>
          <th>見出しのセル</th>
          <td>データのセル</td>
        </tr>
      </tbody>
      <p>Pテキストだよ</p>
    </table>
  );
}
