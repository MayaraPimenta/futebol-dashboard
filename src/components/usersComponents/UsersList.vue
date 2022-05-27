<template>
  <div class="users-list">
    <div class="users-list__container-header">
      <thead class="users-list__container-header__head">
        <tr>
          <th class="head__id">
            ID
          </th>
          <th class="head__name">
            Nome
          </th>
          <th class="head__phone">
            Telefone
          </th>
          <th class="head__address">
            Endereço
          </th>
          <th class="head__amount">
            Valor
          </th>
          <th class="head__status">
            Status
          </th>
        </tr>
      </thead>
    </div>

    <div class="users-list__container-body">
      <tbody class="users-list__container-body__body">
        <tr>
          <th class="body__id">
            #12345
          </th>
          <th class="body__name">
            John Doe
          </th>
          <th class="body__phone">
            (27) 99999-9999
          </th>
          <th class="body__address">
            Rua Dom Pedro, 312, Bairro-ES
          </th>
          <th class="body__amount">
            R$ 50,00
          </th>
          <th class="body__status">
            Em Preparo
          </th>
        </tr>
      </tbody>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UsersList',

    data() {
        return {
            userData: [
                {
                  'id': '#123456',
                  'nome': 'Marcos Wellington',
                  'telefone': '(27) 99999-9999',
                  'endereço': 'Rua Dom Pedro II, 312, Colina de Laranjeiras, Serra-ES',
                  'valor': '100,00',
                },
                {
                  'id': '#789123',
                  'nome': 'Dirce Pimenta',
                  'telefone': '(27) 99999-9999',
                  'endereço': 'Rua Candeias, 69, Barcelona, Serra-ES',
                  'valor': '80,00',
                },
                {
                  'id': '#123457',
                  'nome': 'Mila',
                  'telefone': '(27) 99999-9999',
                  'endereço': 'Rua Candeias, 69, Caminha, Barcelona',
                  'valor': '50,00',
                },
            ]
        };
    },
  };
</script>

<style lang="scss" scoped>
.users-list {
  @include component;

  &__container-header {
    &__head {
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    background-color: $primary;
    border-radius: $radius-normal;

    tr {
      display: grid;
      align-items: center;
      grid-template-columns: repeat(3, 1fr) 200px repeat(2, 1fr);
      gap: 5px;
      width: 100%;
      justify-items: start;
    }
  }
  }

  &__container-body {
    &__body {
      display: flex;
      align-items: center;
      padding: 1rem 1.5rem;

      tr {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(3, 1fr) 200px repeat(2, 1fr);
        gap: 5px;
        width: 100%;
        justify-items: start;
        text-align: left;
        font-weight: 400;

        th {
          font-weight: $font-regular;
        }

        .body__address, .body__name {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 180px;
        }

        .body__status {
          font-size: 0.75rem;
          font-weight: 700;
          background-color: rgb(250, 227, 227);
          padding: 8px;
          border-radius: 5px;
          color: rgb(235, 52, 52);
        }
      }
    }
  }
}
</style>