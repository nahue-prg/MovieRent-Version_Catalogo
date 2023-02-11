import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { db } from "../../db/firebasea-config";
import { collection, getDocs, updateDoc  } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import ModalContainer from "../Modal/ModalContainer";

const PostStore = () => {
  const [inputColeccion, setInputColeccion] = useState("");
  const [inputURL, setInputURL] = useState("");
  const [inputCampos, setInputCampos] = useState("");
  const [textAreaCargado, settextAreaCargado] = useState("");
  const [inputEndpoint, setInputEndpoint] = useState("");
  const [modal, setModal] = useState(false);
  const itemsCollectionMovies = collection(db, "Movies");
  const itemsCollectionActores = collection(db, "Actores");
  const itemsCollectionTrillers = collection(db, "Trillers");
  const [actores, setActores] = useState([]);
  const [movies, setMovies] = useState([]);
  const [trillers, setTrillers] = useState([]);
  const [obtenerActores, setObtenerActores] = useState(false);
  const [obtenerTrillers, setObtenerTrillers] = useState(false);
  const [actualizarPrecios, setActualizarPrecios] = useState(false);
  const [precio, setInputPrecio] = useState ("");


  /*Conecta con FIREBASE y solicita una coleccion */
  const getItems = async (referencia) => {
    const querySnapshot = await getDocs(referencia);
    const docs = await querySnapshot.docs.map((doc) => doc.data());
    return docs;
  };

  /*Funcion encargada de subir cada elemento como un a firestore */
  const PostFireStore = async (event) => {
    try {
      let data = JSON.parse(textAreaCargado);
      data.forEach(async (obj) => {
        await setDoc(doc(db, inputColeccion, obj.id.toString()), obj);
      });
      if (event !== null) setModal(!modal);

      console.log("Carga realizada");
    } catch (ex) {
      console.log(ex);
      alert("Cargue el JSON correctamente antes de continuar");
    }
  };

  const GetActores = async (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Presione aceptar para proceder con la carga de actores automatizado por peliculas")) {
      if (movies.length === 0) {
          const docs = await getItems(itemsCollectionMovies);
          setMovies(docs);
          setObtenerActores(true);
      }
      else{
        RealizarObtenerActores();
      }
    }
  };

  const GetTrillers = async (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Presione aceptar para proceder con la carga de trillers automatizado por peliculas")) {
      if (movies.length === 0) {
        const docs = await getItems(itemsCollectionMovies);
        setMovies(docs);
        setObtenerTrillers(true);
    }
    else{
      RealizarObtenerTrillers();
    }
    }
  };

  const RealizarObtenerActores = async () =>{
      movies.forEach( async (movie) => {
        let url = `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=af1f89a05a4477a5e6990c32d50ccc1d&language=es`;
        
         axios
          .get(url)
          .then( async ( res) => await setDoc(doc(db, "Actores", res.data.id.toString()), res.data))
          .catch((err) => console.log(err));
      });
  }

  const RealizarObtenerTrillers = async () =>{
      movies.forEach( async (movie) => {
        let url = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=af1f89a05a4477a5e6990c32d50ccc1d`;
        
         axios
          .get(url)
          .then( async ( res) => await setDoc(doc(db, "Trillers", res.data.id.toString()), res.data))
          .catch((err) => console.log(err));
      });
  }

  const GetUrl = (event, url) => {
    event.preventDefault();
    axios
      .get(inputURL === "" ? url : inputURL)
      .then((res) =>
        obtenerMiembros(
          res.data[
            inputEndpoint == null || inputEndpoint === "" ? 1 : inputEndpoint
          ]
        )
      )
      .catch((err) => console.log(err));
  };

  /*Segmenta la respuesta de la API para guardar unicamente los campos o miembros ingresados en el formulario*/
  const obtenerMiembros = (response) => {
    const miembros = inputCampos.split(";");
    let responseFormateado = [];
    response.forEach((e) => {
      let objeto = {};
      miembros.forEach((x) => {
        objeto[x] = e[x];
      });
      responseFormateado.push(objeto);
    });
    settextAreaCargado(JSON.stringify(responseFormateado));
  };

  const AgregarPrecioMovies = async (event) => {
    event.preventDefault();

    // eslint-disable-next-line no-restricted-globals
    if (confirm("Presione aceptar para proceder con la carga de precios de peliculas")) {
      if (movies.length === 0) {
          setActualizarPrecios(true);
      }
      else{
        RealizarActualizarPrecios();
      }
    }
    }

  const RealizarActualizarPrecios = async () =>{

    const IDs = movies.map( (x) =>{ return ({id : x.id, rating: x.vote_average }) } );
    console.log(IDs);

    IDs.forEach( async (x) => {
      let valor  =  await updateDoc(doc(db, "Movies", x.id.toString()),  {
        precio: (precio * x.rating).toFixed(2)
    })
    console.log("Solicitudes enviadas " + valor)
    });
  } 


  const CargarArchivo = (event) => {
    event.preventDefault();
    alert("Boton inhabilitado. Funcion en desarrollo..");
  };

   const fetchData = async () => {
    const docsMovies = await getItems(itemsCollectionMovies);
    setMovies(docsMovies);
    // const docsActores = await getItems(itemsCollectionActores);
    // setActores(docsActores);
    // try{
    // const docsTrillers = await getItems(itemsCollectionTrillers);
    // setTrillers(docsTrillers);
    // } catch(ex){console.log(ex)}
  }

  useEffect(() =>{
    if(obtenerActores){
      RealizarObtenerActores();
      setObtenerActores(false);
    }
    if (obtenerTrillers){
      RealizarObtenerTrillers();
      setObtenerTrillers(false);
    }
    if (actualizarPrecios){
      setActualizarPrecios(false);
      RealizarActualizarPrecios();
    }
    console.log(movies);
  },
  [movies]);

  useEffect(() => {
    console.log(actores);
  }, [actores])

  useEffect(() => {
    console.log(trillers);
  }, [trillers])
  
  useEffect(  () => {
  fetchData();
  }, [])
  
  return (
    <Form
      style={{ width: "80%", maxWidth: 500, margin: "auto", marginTop: 100 }}
    >
      <FormGroup row style={{ textAlign: "center" }}>
        <h3>Cargue un archivo o utilize la URL</h3>
      </FormGroup>
      <FormGroup row>
        <Label for="NombreColeccion" sm={2}>
          Coleccion
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="email"
            id="NombreColeccion"
            placeholder="Movies.."
            onChange={(e) => setInputColeccion(e.target.value)}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="URL" sm={2}>
          Url
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="email"
            id="URL"
            placeholder="https:/.."
            onChange={(e) => setInputURL(e.target.value)}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="EndPoint" sm={2}>
          Indice
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="EndPoint"
            id="EndPoint"
            placeholder="results"
            onChange={(e) => setInputEndpoint(e.target.value)}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="Campos" sm={2}>
          Campos
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="password"
            id="Campos"
            placeholder="miembro1;miembro2;miembro3...  (Separados por ; )"
            onChange={(e) => setInputCampos(e.target.value)}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleFile" sm={2}>
          Archivo
        </Label>
        <Col sm={10}>
          <Input type="file" name="file" id="exampleFile" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col
          sm={{ size: 12 }}
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: 15,
            marginBottom: 10,
          }}
        >
          <Button onClick={(event) => GetUrl(event)} color="primary">
            Cargar por URL
          </Button>
          <Button onClick={(event) => CargarArchivo(event)} color="primary">
            Cargar Archivo
          </Button>
          <Button onClick={(event) => PostFireStore(event)} color="warning">
            Subir a firestore
          </Button>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col
          sm={{ size: 12 }}
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: 15,
          }}
        >
          <Button onClick={(event) => GetActores(event)} color="danger">
            Generar Actores por peliculas
          </Button>
          <Button onClick={(event) => GetTrillers(event)} color="danger">
            Generar Triller por peliculas
          </Button>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={12}>
          <Input
            type="textarea"
            name="text"
            id="exampleText"
            value={
              textAreaCargado === ""
                ? "Aqui vera el contenido listo para subir a firestore.."
                : textAreaCargado
            }
            style={{ height: 500 }}
          />
        </Col>
        <Col
          sm={12}
          style={{
            textAlign: "center",
            margin: "auto",
            marginTop: 20,
            marginBottom: 60,
          }}
        >
          <FormText>
            Cargue los datos, seleccione el boton correspondiente y espere que
            llegue la informacion al textarea "Cargado", puede modificar la
            informacion si lo desea. Luego presione subir a firestore.
          </FormText>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="precio" sm={2}>
          Precio * Rating
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="precio"
            id="precio"
            placeholder="10.."
            onChange={(e) => setInputPrecio(e.target.value)}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col
          sm={{ size: 12 }}
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: 15,
          }}
        >
          <Button onClick={(event) => AgregarPrecioMovies(event)} color="primary">
            Actualizar precios
          </Button>
        </Col>
      </FormGroup>
      <ModalContainer
        titulo={"Movie | Rent"}
        descripcion={"Los archivos se subieron con exitó!"}
        botonCerrar={"Ok"}
        estado={modal}
      />
    </Form>
  );
};

export default PostStore;
