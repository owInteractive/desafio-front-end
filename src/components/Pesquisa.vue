<template>
  <div class="navbar-ow">
    <div class="container shadow bg-white rounded container-navbar" style="height: 100px;">
      <p class="produto">Encontre seu produto
      </p>
      <div class="elementos-navbar" style="width: 80%;">
      <form style="width: 100%;">
       <input type="email" :value="message" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Pesquisar...">
      </form>
      <i class="fa fa-search icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
      name: 'Pesquisa',
      prop: ["message"],
  }
</script>


<style lang="scss" scoped>

  .navbar-ow{
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: 'Nunito', regular;
  }

  .container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .produto {
    margin-bottom: 0px;
    color: #909090;
    font-family: 'SourceSansPro-Bold';
  }


  .produtos{
    font-size: 16px;
    color: #909090;
    margin-right: 20px;
  }

  .elementos-navbar{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }

  .icon {
    color: white;
    background-color: #8e36b7;
    width: 40px;
    height: 100%;
    padding: 6px;
    border-radius: 4px;
    position: relative;
    right: 35px;
  }

  @media (max-width: 550px){
    .logo{
      width: 30%;
    }
  }

  @media (max-width: 450px){

    .logo{
      width: 30%;
    }

    .produtos{
      margin-right: 8px;
      font-size: 14px;
    }
  }

  @media (max-width: 450px){

    .logo {
      width: 25%;
    }

    .produtos{
      font-size: 13px;
    }

  }


  @media (max-width: 330px){
    .produtos{
      font-size: 11px;
    }
  }

</style>