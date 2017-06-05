class NegociacaoController {

	constructor() {
		this._inputData = $("#data");
		this._inputQuantidade = $("#quantidade");
		this._inputValor = $("#valor");
	
		this._listaNegociacoes = new Bind(
			new ListaNegociacoes(), 
			new NegociacoesView($("#negociacoesView")[0]), 
			'adiciona', 'esvazia')

		this._mensagem = new Bind( new Mensagem(),
			new MensagemView($("#mensagemView")[0]),
			'texto');

	}

	adiciona(event) {
		event.preventDefault();

		this._listaNegociacoes.adiciona(this._criaNegociacao());
		this._mensagem.texto = "Negociação adicionada com sucesso!";
		this._mensagemView.update(this._mensagem);
		this._limpaFormulario();
	}

	apaga() {
		this._listaNegociacoes.esvazia();

		this._mensagem.texto = "Negociações apagadas com sucesso!";
		this._mensagemView.update(this._mensagem);
	}

	_criaNegociacao() {
		return new Negociacao (
			DateHelper.textoParaData(this._inputData.val()),
			this._inputQuantidade.val(),
			this._inputValor.val());
	}

	_limpaFormulario() {
		this._inputData.val('');
		this._inputQuantidade.val(1);
		this._inputValor.val(0.0);
		this._inputData.focus();
	}
}