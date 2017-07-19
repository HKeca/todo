<template>
  <div class="container">
    <div class="editBox">
      <div class="editBox-title">Editing {{ title }}</div>

      <div class="editBox-inputs">
        <div>
          <input type="text" class="editBox-input" :value="title" placeholder="Title">
        </div>
        <div>
          <textarea class="editBox-input-text" cols="40"
                    rows="5" placeholder="Description" :value="desc"></textarea>
        </div>
        <div>
          <button class="editBox-btn">Cancel</button><button class="editBox-btn">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Test',
        desc: 'Some text that is awesome, so cool!'
      }
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
  }

  .editBox {
    margin: 10px 0;
    background: white;
    box-shadow: 0 0 6px rgba(0,0,0,0.3);
    width: 60%;
    min-width: 300px;
    height: 400px;
  }

  .editBox-title {
    color: #DD4336;
    font-weight: 500;
    font-size: 2em;
    text-align: center;
    padding: 20px 0;
    border-bottom: 2px solid #DD4336;
  }

  .editBox-inputs {
    /*margin: 10px auto;*/
    text-align:center;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }

  .editBox-input {
    margin: 10px 0;
    padding: 10px;
    width: 300px;
    border: none;
    border-left: 4px solid #DD4336;
    background: #EDEDED;
    font-size: 1.4em;
  }

  .editBox-input-text {
    border: none;
    font-size: 1.4em;
    padding: 5px;
    background: #EDEDED;
    border-left: 4px solid #DD4336;
    resize: none;
  }

  .editBox-input:focus, .editBox-input-text:focus,.editBox-btn:focus {
    outline: none;
  }

  .editBox-btn {
    border: 2px solid #DD4336;
    padding: 10px;
    background: transparent;
    margin: 10px 10px;
    font-size: 1.2em;
  }

  .editBox-btn:hover {
    transition: all 0.2s;
    background: #DD4336;
    color: white;
  }
</style>
