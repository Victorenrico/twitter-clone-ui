import React from 'react';

import Feed from '../Feed';

import { 
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>
          Editar perfil
        </EditButton>
        <h1>Victor Codonho</h1>
        <h2>@victorcodonho</h2>

        <p>
          Developer at <a href="https://stefanini.com">@Stefanini</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Sao Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 28 de dezembro de 1998
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;