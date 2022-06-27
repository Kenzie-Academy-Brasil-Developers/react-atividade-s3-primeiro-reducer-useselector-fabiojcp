import { DivMain, DivText, Title, Value, Img } from "./CardStyle";

export default function Card({ prod }) {
  console.log(prod);
  return (
    <DivMain>
      <DivText>
        <Title>{prod.name}</Title>
        <Value>$ {prod.price}</Value>
      </DivText>
      <Img color={prod.color}>{prod.img()}</Img>
    </DivMain>
  );
}
