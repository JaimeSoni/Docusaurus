import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Promesas',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Las promesas son una forma poderosa de manejar la asincronía en JavaScript, haciendo que el código sea más fácil de leer y mantener.
      </>
    ),
  },
  {
    title: 'Fetch API',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Es una interfaz de JavaScript que permite realizar solicitudes HTTP de manera sencilla y basada en promesas.
      </>
    ),
  },
  {
    title: 'GET / POST',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        GET y POST son dos de los métodos HTTP más utilizados en las solicitudes web, cada uno diseñado para propósitos específicos en la interacción con servidores.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
