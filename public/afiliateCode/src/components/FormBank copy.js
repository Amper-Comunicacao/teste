import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { Col, Row, Form, Button } from "react-bootstrap";
import FormButtons from "./FormButtons";

export default function FormBank() {
  const appContext = useContext(AppContext);
  const { form, handleChange } = appContext;
  return (
    <>
      <Row className="px-sm-1 px-md-0">
        <Col sm={12} md={6}>
          <Form.Label>Banco</Form.Label>
          <Form.Control value={form.banco} onChange={handleChange("banco")} as="select">
            <option>001 – Banco do Brasil S.A.</option>
            <option>033 – Banco Santander (Brasil) S.A.</option>
            <option>104 – Caixa Econômica Federal</option>
            <option>237 – Banco Bradesco S.A.</option>
            <option>341 – Banco Itaú S.A.</option>
            <option>356 – Banco Real S.A. (antigo)</option>
            <option>389 – Banco Mercantil do Brasil S.A.</option>
            <option>399 – HSBC Bank Brasil S.A. – Banco Múltiplo</option>
            <option>422 – Banco Safra S.A.</option>
            <option>453 – Banco Rural S.A.</option>
            <option>633 – Banco Rendimento S.A.</option>
            <option>652 – Itaú Unibanco Holding S.A.</option>
            <option>745 – Banco Citibank S.A.</option>
            <option>246 – Banco ABC Brasil S.A.</option>
            <option>025 – Banco Alfa S.A.</option>
            <option>641 – Banco Alvorada S.A.</option>
            <option>029 – Banco Banerj S.A.</option>
            <option>038 – Banco Banestado S.A.</option>
            <option>000 – Banco Bankpar S.A.</option>
            <option>740 – Banco Barclays S.A.</option>
            <option>107 – Banco BBM S.A.</option>
            <option>031 – Banco Beg S.A.</option>
            <option>
              096 – Banco BM{"&"}F de Serviços de Liquidação e Custódia S.A
            </option>
            <option>318 – Banco BMG S.A.</option>
            <option>752 – Banco BNP Paribas Brasil S.A.</option>
            <option>248 – Banco Boavista Interatlântico S.A.</option>
            <option>036 – Banco Bradesco BBI S.A.</option>
            <option>204 – Banco Bradesco Cartões S.A.</option>
            <option>225 – Banco Brascan S.A.</option>
            <option>044 – Banco BVA S.A.</option>
            <option>263 – Banco Cacique S.A.</option>
            <option>473 – Banco Caixa Geral – Brasil S.A.</option>
            <option>222 – Banco Calyon Brasil S.A.</option>
            <option>040 – Banco Cargill S.A.</option>
            <option>M08 – Banco Citicard S.A.</option>
            <option>M19 – Banco CNH Capital S.A.</option>
            <option>
              215 – Banco Comercial e de Investimento Sudameris S.A.
            </option>
            <option>756 – Banco Cooperativo do Brasil S.A. – BANCOOB</option>
            <option>748 – Banco Cooperativo Sicredi S.A.</option>
            <option>505 – Banco Credit Suisse (Brasil) S.A.</option>
            <option>229 – Banco Cruzeiro do Sul S.A.</option>
            <option>003 – Banco da Amazônia S.A.</option>
            <option>083-3 – Banco da China Brasil S.A.</option>
            <option>707 – Banco Daycoval S.A.</option>
            <option>M06 – Banco de Lage Landen Brasil S.A.</option>
            <option>024 – Banco de Pernambuco S.A. – BANDEPE</option>
            <option>456 – Banco de Tokyo-Mitsubishi UFJ Brasil S.A.</option>
            <option>214 – Banco Dibens S.A.</option>
            <option>047 – Banco do Estado de Sergipe S.A.</option>
            <option>037 – Banco do Estado do Pará S.A.</option>
            <option>041 – Banco do Estado do Rio Grande do Sul S.A.</option>
            <option>004 – Banco do Nordeste do Brasil S.A.</option>
            <option>265 – Banco Fator S.A.</option>
            <option>M03 – Banco Fiat S.A.</option>
            <option>224 – Banco Fibra S.A.</option>
            <option>626 – Banco Ficsa S.A.</option>
            <option>394 – Banco Finasa BMC S.A.</option>
            <option>M18 – Banco Ford S.A.</option>
            <option>233 – Banco GE Capital S.A.</option>
            <option>734 – Banco Gerdau S.A.</option>
            <option>M07 – Banco GMAC S.A.</option>
            <option>612 – Banco Guanabara S.A.</option>
            <option>M22 – Banco Honda S.A.</option>
            <option>063 – Banco Ibi S.A. Banco Múltiplo</option>
            <option>M11 – Banco IBM S.A.</option>
            <option>604 – Banco Industrial do Brasil S.A.</option>
            <option>320 – Banco Industrial e Comercial S.A.</option>
            <option>653 – Banco Indusval S.A.</option>
            <option>630 – Banco Intercap S.A.</option>
            <option>249 – Banco Investcred Unibanco S.A.</option>
            <option>184 – Banco Itaú BBA S.A.</option>
            <option>479 – Banco ItaúBank S.A</option>
            <option>M09 – Banco Itaucred Financiamentos S.A.</option>
            <option>376 – Banco J. P. Morgan S.A.</option>
            <option>074 – Banco J. Safra S.A.</option>
            <option>217 – Banco John Deere S.A.</option>
            <option>065 – Banco Lemon S.A.</option>
            <option>600 – Banco Luso Brasileiro S.A.</option>
            <option>755 – Banco Merrill Lynch de Investimentos S.A.</option>
            <option>746 – Banco Modal S.A.</option>
            <option>151 – Banco Nossa Caixa S.A.</option>
            <option>045 – Banco Opportunity S.A.</option>
            <option>623 – Banco Panamericano S.A.</option>
            <option>611 – Banco Paulista S.A.</option>
            <option>643 – Banco Pine S.A.</option>
            <option>638 – Banco Prosper S.A.</option>
            <option>747 – Banco Rabobank International Brasil S.A.</option>
            <option>M16 – Banco Rodobens S.A.</option>
            <option>072 – Banco Rural Mais S.A.</option>
            <option>250 – Banco Schahin S.A.</option>
            <option>749 – Banco Simples S.A.</option>
            <option>366 – Banco Société Générale Brasil S.A.</option>
            <option>637 – Banco Sofisa S.A.</option>
            <option>464 – Banco Sumitomo Mitsui Brasileiro S.A.</option>
            <option>082-5 – Banco Topázio S.A.</option>
            <option>M20 – Banco Toyota do Brasil S.A.</option>
            <option>634 – Banco Triângulo S.A.</option>
            <option>208 – Banco UBS Pactual S.A.</option>
            <option>M14 – Banco Volkswagen S.A.</option>
            <option>655 – Banco Votorantim S.A.</option>
            <option>610 – Banco VR S.A.</option>
            <option>370 – Banco WestLB do Brasil S.A.</option>
            <option>
              021 – BANESTES S.A. Banco do Estado do Espírito Santo
            </option>
            <option>
              719 – Banif-Banco Internacional do Funchal (Brasil)S.A.
            </option>
            <option>073 – BB Banco Popular do Brasil S.A.</option>
            <option>
              078 – BES Investimento do Brasil S.A.-Banco de Investimento
            </option>
            <option>069 – BPN Brasil Banco Múltiplo S.A.</option>
            <option>070 – BRB – Banco de Brasília S.A.</option>
            <option>477 – Citibank N.A.</option>
            <option>081-7 – Concórdia Banco S.A.</option>
            <option>487 – Deutsche Bank S.A. – Banco Alemão</option>
            <option>751 – Dresdner Bank Brasil S.A. – Banco Múltiplo</option>
            <option>062 – Hipercard Banco Múltiplo S.A.</option>
            <option>492 – ING Bank N.V.</option>
            <option>488 – JPMorgan Chase Bank</option>
            <option>409 – UNIBANCO – União de Bancos Brasileiros S.A.</option>
            <option>230 – Unicard Banco Múltiplo S.A.</option>
          </Form.Control>
        </Col>
        <Col sm={12} md={6}>
          <Form.Label>Tipo de conta</Form.Label>
          <Form.Control value={form.tipo_conta} onChange={handleChange("tipo_conta")} as="select">
            <option>Corrente</option>
            <option>Poupança</option>
          </Form.Control>
        </Col>
      </Row>
      <Row className="px-sm-1 px-md-0">
        <Col sm={8} md={4}>
          <Form.Label>Agência</Form.Label>
          <Form.Control value={form.agencia} onChange={handleChange("agencia")} required type="text" />
        </Col>
        <Col sm={4} md={2}>
          <Form.Label>Dígito</Form.Label>
          <Form.Control value={form.digito_agencia} onChange={handleChange("digito_agencia")} required type="text" />
        </Col>
        <Col sm={8} md={4}>
          <Form.Label>Conta</Form.Label>
          <Form.Control value={form.conta} onChange={handleChange("conta")} required type="text" />
        </Col>
        <Col sm={4} md={2}>
          <Form.Label>Dígito</Form.Label>
          <Form.Control value={form.digito_conta} onChange={handleChange("digito_conta")} required type="text" />
        </Col>
      </Row>
      <FormButtons />
    </>
  );
}
