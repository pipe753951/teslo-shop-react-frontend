interface Props {
  title: string;
  subtitle?: string;
}

const ShopJumbotron = function (props: Props) {
  const {
    title,
    subtitle = "Ropa minimalista y elegante inspirada en el diseño futurista de Tesla. Calidad premium para un estilo futurista.",
  } = props;

  return (
    <section className="py-10 px-4 lg:px-8 bg-muted">
      <div className="container mx-auto text-center">
        <h1 className="font-montserrat-alternates text-6xl tracking-tight mb-6">
          {title}
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default ShopJumbotron;
