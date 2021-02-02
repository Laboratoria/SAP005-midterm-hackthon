
//parte do script pra chamar o datepicker definido na jQuery UI
$(function() {
    $( "#input-date" ).datepicker({
        dateFormat: 'dd-mm-yy',
        showOtherMonths: true,
        dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo'],
        dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
        dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
        monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
        monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
        minDate: 0, 
        maxDate: "+1M +10D" 
    });
});

const date = document.getElementById("input-date")
const btnDate = document.getElementById("btn-date");

btnDate.addEventListener("click",valueInputDate)

function valueInputDate(){
    console.log(date.value)
}

