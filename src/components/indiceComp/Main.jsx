//import '../../style/inicio.css'
import Turning from '../indiceComp/Turning'

const Main = () => {
    return (
        <main id="home">
        <h2 class="texto-alineado">Obras clásicas y contemporáneas</h2>
< Turning />
     
<div className="cervantes-part">
        <div class="left">
          <p>
            ¡Oh lamentables ruinas de la desdichada Nicosia, apenas enjutas de
            la sangre de vuestros valerosos y mal afortunados defensores! Si
            como carecéis de sentido, le tuviérades ahora, en esta soledad donde
            estamos, pudiéramos lamentar juntas nuestras desgracias, y quizá el
            haber hallado compañía en ellas aliviara nuestro tormento. Esta
            esperanza os puede haber quedado, mal derribados torreones, que otra
            vez, aunque no para tan justa defensa como la en que os derribaron,
            os podéis ver levantados. Mas yo, desdichado, ¿qué bien podré
            esperar en la miserable estrecheza en que me hallo, aunque vuelva al
            estado en que estaba antes deste en que me veo? Tal es mi desdicha,
            que en la libertad fui sin ventura, y en el cautiverio ni la tengo
            ni la espero.
          </p>
          <p>
            Estas razones decía un cautivo cristiano, mirando desde un recuesto
            las murallas derribadas de la ya perdida Nicosia; y así hablaba con
            ellas, y hacía comparación de sus miserias a las suyas, como si
            ellas fueran capaces de entenderle: propia condición de afligidos,
            que, llevados de sus imaginaciones, hacen y dicen cosas ajenas de
            toda razón y buen discurso.
          </p>
          <p>
          En esto, salió de un pabellón o tienda, de cuatro que estaban en
          aquella campaña puestas, un turco, mancebo de muy buena disposición y
          gallardía, y, llegándose al cristiano, le dijo:
          </p>
          <p>
            Apostaría yo, Ricardo amigo, que te traen por estos lugares tus
            continuos pensamientos.
          </p>
          <p>
            Sí traen ­respondió Ricardo (que éste era el nombre del cautivo)­;
            mas, ¿qué aprovecha, si en ninguna parte a do voy hallo tregua ni
            descanso en ellos, antes me los han acrecentado estas ruinas que
            desde aquí se descubren?
          </p>
          <p>Por las de Nicosia dirás ­dijo el turco.</p>
          <p>
            Pues ¿por cuáles quieres que diga ­repitió Ricardo­, si no hay otras
            que a los ojos por aquí se ofrezcan?
          </p>
        </div>

        <div class="right">
          <figure>
            <img src="" alt="columna de libros" />
            <figcaption>
              <strong>
                "El que lee mucho y anda mucho, ve mucho y sabe mucho"
              </strong>
              <em>Miguel de Cervantes Saavedra</em>
            </figcaption>
          </figure>
        </div>
        </div>

        <div class="iframe">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/CndQ-CxwnNY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

      </main>
     
    )
}

export default Main