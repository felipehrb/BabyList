$(document).ready(function() {
  // Sumir com todos os span's
  $("span[class='AlertaCampo']").hide();
  // Aplica evento de blur (perda de foco) em todos os inputs
  // do tipo "type"
  $("input[type='text']").blur(function(){
    // this representa o objeto que disparou o evento, no
   // caso, a caixa de texto que o usuário acabou de sair
    // (seja qual da duas for!) 
    if ($(this).val().length == 0) {
      //Altera borda do campo para vermelho
      $(this).css("border-color", "#FF0000");
      // Exibe o elemento seguinte (o span logo depois!)
      $(this).next().show();
    }
  });


  // Aplicado no ganho de foco de todas as caixas de texto,
  // some com o span imediatamente após (Caso sua mensagem
  // esteja sendo exibida!)
  $("input[type='text']").focus(function() {
    $(this).css("border-color", "#FFFFFF");
    $(this).next().hide();
  });  


});