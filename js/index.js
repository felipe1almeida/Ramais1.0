

console.log("JS carregado");




//METODO DE CARREGAR OS DADOS DO JSON E EXIBIR NA TELA
$(document).ready(function () {
    $(document).ready(function () {
        $.getJSON('funcionarios.json', function (data) {
            for (var i = 0; data.length > i; i++) {

                $('#tab').append('<tr><td>' + "<img src=" + data[i].foto + "></img>" + '</td><td>' + data[i].Nome + '</td><td>' + data[i].Setor + '</td><td>' + data[i].Email + '</td><td>' + data[i].Ramal + '</td></tr>');

            };
        });
    });
});


//METODO DE BUSCA NA TABELA DE RAMAIS
$(document).ready(function () {
    $("#campobusca").keyup(function () {
        var digitado = $("#campobusca").val().toLowerCase();

        Procurar_na_tabela($(this).val());

        console.log($(this).val());

        function Procurar_na_tabela(value) {
            $('tr').each(function () {
                var achou = false;
                $(this).each(function () {
                    if ($(this).text().replace(/[áàâã]/g,'a').replace(/[éèê]/g,'e').replace(/[óòôõ]/g,'o').replace(/[úùû]/g,'u').toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                        achou = true;
                    }
                });
                if (achou == true) {
                    $("#inicio").show();
                    $(this).show();

                }
                else {
                    $(this).hide();
                }
            })
        }

    })
})






//BOTÃO SUBIR AO TOPO
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // RETORNAR SCROLL AO 0PX
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('#back-to-top').tooltip('show');

});


//FUNÇÃO BLOQUEAR BOTÃO DIREITO
$(document).ready(function () {
    $(document).bind("contextmenu", function (e) {
        return false;
    });
});
