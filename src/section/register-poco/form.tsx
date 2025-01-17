import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Col, Row, Spinner, Form as RNForm } from "react-bootstrap";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "../../components/hook-form";

const schema = z.object({
  descricao: z.string(),
  bacia: z.string(),
  bloco: z.string(),
  licencaExploracao: z.string(),
  latitude: z.number(),
  longetitude: z.number(),
  lamineDeAgua: z.string(),
  dataInicioPerfuracao: z.date(),
  dataConclusaoPerfuracao: z.date(),
  profundidade: z.number(),
  profundidadeTotal: z.number(),
  nomeDaRig: z.string(),
  classe: z.string(),
  ambiente: z.string(),
  dataDt: z.date(),
  dataDeReentrada: z.date(),
  dataDeConclusao: z.date(),
  pocoTipoId: z.number(),
  plataformaId: z.number(),
});

type FormValues = z.infer<typeof schema>;

type Props = {
  submit: (data: FormValues) => void;
  edit?: boolean;
  isLoading: boolean;
};

export function Form({ submit, edit, isLoading }: Props) {
  const message = edit ? "Atualizar" : "Salvar";
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => submit(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col md={6} className="mb-3">
          <TextField
            name="descricao"
            label="Descrição"
            control={control}
            error={errors?.descricao?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            name="bacia"
            label="Bacia"
            control={control}
            error={errors?.bacia?.message || ""}
          />
        </Col>

        <Col md={6} className="mb-3">
          <TextField
            name="bloco"
            label="Bloco"
            control={control}
            error={errors?.bloco?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            name="licencaExploracao"
            label="licencaExploracao"
            control={control}
            error={errors?.licencaExploracao?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            name="latitude"
            label="latitude"
            control={control}
            error={errors?.latitude?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            name="longetitude"
            label="longetitude"
            control={control}
            error={errors?.longetitude?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            name="lamineDeAgua"
            label="lamineDeAgua"
            control={control}
            error={errors?.lamineDeAgua?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            name="dataInicioPerfuracao"
            label="dataInicioPerfuracao"
            control={control}
            error={errors?.dataInicioPerfuracao?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            name="dataConclusaoPerfuracao"
            label="dataConclusaoPerfuracao"
            control={control}
            error={errors?.dataConclusaoPerfuracao?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            name="profundidade"
            label="profundidade"
            control={control}
            error={errors?.profundidade?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            name="profundidadeTotal"
            label="profundidadeTotal"
            control={control}
            error={errors?.profundidadeTotal?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            name="nomeDaRig"
            label="nomeDaRig"
            control={control}
            error={errors?.nomeDaRig?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            name="classe"
            label="classe"
            control={control}
            error={errors?.classe?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            name="ambiente"
            label="ambiente"
            control={control}
            error={errors?.ambiente?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            name="dataDt"
            label="dataDt"
            control={control}
            error={errors?.dataDt?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            name="dataDeReentrada"
            label="dataDeReentrada"
            control={control}
            error={errors?.dataDeReentrada?.message || ""}
          />
        </Col>
        <Col md={6} className="mb-3">
          <TextField
            name="dataDeConclusao"
            label="dataDeConclusao"
            control={control}
            error={errors?.dataDeConclusao?.message || ""}
          />
        </Col>

        <Col md={6} className="mb-3">
          <RNForm.Select aria-label="Default select example">
            <option>Tipo de poco</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </RNForm.Select>
        </Col>
        <Col md={6} className="mb-3">
          <RNForm.Select aria-label="Default select example">
            <option>Tipo de plataforma</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </RNForm.Select>
        </Col>

        <Col md={12}>
          <Button
            type="submit"
            variant="primary"
            className=""
            style={{ padding: "5px 60px" }}
          >
            {isLoading ? (
              <Spinner animation="border" variant="light" size="sm" />
            ) : (
              message
            )}
          </Button>
        </Col>
      </Row>
    </form>
  );
}
