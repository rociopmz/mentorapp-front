import React,  {useState, useEffect} from 'react';
import { Button, Card, Modal } from 'antd';

const { Meta } = Card;

const CardComponent = ({email, objective,profile_picture, username, aboutme}) => {
  
  const [user, setUser]= useState({})
  const [isModalVisible, setIsModalVisible] = useState(false);

  const getData = () =>{
    const localUser = JSON.parse(localStorage.getItem("user"))
    setUser (localUser)
}
useEffect(()=>{ 
   getData()
},[])

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={profile_picture}/>}
  >
    <Meta title={`Nombre: ${username}`} description={aboutme} />
    <Meta description={`correo: ${email}`} />
    <Meta title={"objetivos"} />
    <Meta description={ <div style= {{display:"flex", flexDirection:"column"}}>{objective.map((item, index)=> <span>{item}</span>)}</div>} />
    {
      user.role=== "mentee" && 
      <>
      <Button>Crear Reseña</Button>
      <Button>Ver Reseñas</Button>
    </>
    }
  </Card>
  <Button type="primary" onClick={showModal}>
        Reseña
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      
      </Modal>

</>

)}
    
    export default CardComponent;