import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mi Nombre</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      
  
        <h1>Bernie O. Perez de la cruz</h1>
      </IonContent>
    </IonPage>
  );
};

export default Home;
