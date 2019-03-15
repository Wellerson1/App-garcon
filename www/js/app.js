//Acrescentando a quantidade em cada produto ao clicar
$('.collection')
	.on('click', '.collection-item',	function(){
		var	$badge	=	$('.badge',	this);
		if	($badge.length	===	0)	{
		$badge	=	$('<span class="badge brown-text">0</span>').appendTo(this);
}
        $badge.text(parseInt($badge.text())	+	1);
         var nomeProduto =	this.firstChild.textContent;

         
//Notificando o nome do produto clicado         
Materialize.toast(nomeProduto + ' adicionado', 500);
});

$('.collection').on('mousedown', '.collection-item', function(){
	alert("Mousedown acionado!");
});

$(".modal-footer").on('click', '#ok', function(){
        var $badge = $('.badge', this);
        $badge = $('#qtd');

});
//Limpando a quantidade de produtos ao clicar sobro o badge
$('.collection').on('click','.badge', function() {
	$(this).remove();
	return	false;
	});

//Listando produtos no modal 
$('.modal-trigger').leanModal();
$('#confirmar').on('click',	function() {
    var	texto	=	"";
    $('.badge').parent().each(function(){
                    texto	+=	this.firstChild.textContent	+	':	';
                    texto	+=	this.lastChild.textContent	+	',	';
    });
    $('#resumo').empty().text(texto);
});

//Limpando os pedidos por submenu
$('.acao-limpar').on('click',	function() {
    $('#numero-mesa').val('');
    $('.badge').remove();
});
