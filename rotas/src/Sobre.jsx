import { Link } from "react-router-dom";

function Sobre() {
  return (
    <div>
      <h1>Sobre Nós</h1>
      <span>Aula de programação Web</span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel
        ornare urna. Cras libero elit, vulputate vel nunc a, volutpat ornare
        ante. Curabitur sit amet fringilla lorem. Aliquam ac lacus nunc. Proin
        eget sem quis quam condimentum faucibus. Duis non accumsan diam.
        Pellentesque laoreet mollis ligula.
      </p>
      <p>
        Suspendisse elementum viverra nisi eu condimentum. Fusce a semper nibh.
        Nullam ut erat lacus. Integer id malesuada nulla, quis porttitor sapien.
        Mauris tempor gravida quam. Praesent a ante purus. Maecenas quis rhoncus
        felis. Donec et tellus nec nisi porta porttitor. Donec laoreet nulla
        lorem, id sodales orci gravida at. Maecenas gravida consequat
        condimentum. In eget tortor laoreet, aliquam est ac, suscipit purus.
        Cras dictum odio et facilisis congue. Nam luctus lorem et turpis mollis,
        eu euismod dui consectetur.
      </p>
      <p>
        Vivamus sodales libero non tincidunt sodales. Donec sit amet vestibulum
        tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Vivamus ultrices, quam non tempor viverra, nunc ipsum molestie lacus, ut
        maximus nulla tortor vitae risus. Quisque tincidunt efficitur sodales.
        Mauris ultricies pulvinar lobortis. Nunc eget turpis non nisi tristique
        vehicula. Integer cursus dignissim sapien facilisis efficitur. Curabitur
        vel lectus iaculis, tincidunt mauris semper, sagittis quam. Vestibulum
        mattis cursus sem, molestie pretium enim lobortis vel.
      </p>
      <p>
        Duis non mollis elit. Aliquam vel feugiat est, sit amet tincidunt elit.
        Ut finibus sapien nec turpis vulputate, sit amet dictum sem facilisis.
        Donec eu sagittis neque. Nullam pretium turpis est, imperdiet egestas ex
        iaculis at. Etiam vestibulum maximus mauris, ut imperdiet nisl luctus
        ut. Nulla consequat risus id tortor sodales, vitae iaculis leo sagittis.
        Curabitur dignissim nec elit auctor sagittis. Aenean in mi viverra,
        luctus enim non, sagittis tortor. Donec euismod tempor nisi, sed finibus
        turpis dignissim quis. In hac habitasse platea dictumst. Cras hendrerit
        sollicitudin ullamcorper.
      </p>
      <br /> <br />
      <Link to="/sobre">Sobre</Link> <br />
      <Link to="/contato">Contato</Link>
    </div>
  );
}

export default Sobre;
