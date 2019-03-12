CREATE TABLE `usuarios` (
  `id` varchar(256) NOT NULL,
  `nome` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `senha` varchar(256) NOT NULL,
  `data_nascimento` varchar(255) NOT NULL,
  `instituicao` varchar(256) NOT NULL,
  `profissao` varchar(256) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

--Gerado com a opção de exportar do MySQL