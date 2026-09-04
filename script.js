const informacoes = [
  ". O desentendimento público começou a partir de uma reclamação sobre o orçamento de um salão de beleza.",
  ". A influenciadora Malévola Alves expôs sua insatisfação com a diferença de valores cobrados pelo serviço.",
  ". O estabelecimento cobrou um valor superior ao esperado inicialmente por múltiplos procedimentos estéticos.",
  ". A influenciadora Sophia Florence (Soso Careca) defendeu o salão de beleza publicamente nas redes.",
  ". Sophia Florence era cliente do mesmo salão e saiu em defesa do trabalho dos profissionais.",
  ". A discussão ganhou grande proporção com a troca de indiretas entre as criadoras de conteúdo.",
  ". O cantor de funk MC Paiva teve seu nome citado durante as trocas de mensagens e vídeos.",
  ". MC Paiva é um dos artistas de maior alcance na cena do funk paulista atual.",
  ". Diante das menções, MC Paiva enviou mensagens para entender o motivo de seu nome estar envolvido.",
  ". O teor das mensagens privadas vazadas gerou novos desentendimentos entre os envolvidos.",
  ". Uma das frases das conversas gerou forte repercussão quanto à interpretação de identidade e respeito.",
  ". Malévola Alves rebateu as falas do cantor alegando ter sido desrespeitada.",
  ". O clima de tensão entre as partes migrou das redes sociais para um encontro presencial.",
  ". O confronto presencial ocorreu na área externa do cinema de um shopping em São Paulo.",
  ". O cantor MC Paiva estava no shopping acompanhado de sua namorada e de amigos.",
  ". Malévola Alves também estava no centro comercial junto a um grupo de acompanhantes.",
  ". O encontro gerou um bate-boca acalorado diante de diversos frequentadores do local.",
  ". A discussão verbal no shopping evoluiu para um tumulto com empurrões e agressões.",
  ". Pessoas que passeavam pelo shopping registraram o momento da confusão em vídeo.",
  ". Os vídeos gravados por testemunhas mostram a tentativa de terceiros para conter os ânimos.",
  ". A equipe de segurança do shopping foi acionada para intervir e afastar os grupos.",
  ". Durante o ocorrido, palavras de ordem e acusações foram ditas publicamente no saguão.",
  ". A influenciadora Ray Pugliesi, presente no local, também se manifestou em defesa de Malévola.",
  ". O influenciador Edu Becks, que estava com MC Paiva, publicou sua versão dos fatos posteriormente.",
  ". As imagens da confusão se espalharam rapidamente pelas plataformas digitais.",
  ". O assunto permaneceu entre os mais comentados das redes sociais por vários dias.",
  ". Páginas de entretenimento e cobertura de celebridades repercutiram cada desdobramento.",
  ". MC Paiva usou suas redes sociais para se pronunciar e negar intenções ofensivas.",
  ". O cantor afirmou que sua fala nas mensagens foi tirada do contexto original.",
  ". Malévola Alves manteve seu posicionamento, afirmando que reagiu ao que considerou injusto.",
  ". Sophia Florence lamentou a exposição e os desentendimentos gerados publicamente.",
  ". O profissional do salão de beleza envolvido no início da história lamentou o impacto na imagem do local.",
  ". O estabelecimento explicou que a tabela de preços considerava produtos e técnicas específicas.",
  ". A discussão reacendeu debates nas redes sociais sobre conduta e limites na internet.",
  ". O público se dividiu ao comentar as atitudes de cada um dos envolvidos.",
  ". Diversos perfis no TikTok produziram análises e cronologias em vídeo sobre o acontecimento.",
  ". Trechos das declarações dos envolvidos viraram áudios com alto número de dublagens.",
  ". O caso demonstrou a rapidez com que desentendimentos virtuais podem escalar para o mundo presencial.",
  ". Apesar do tumulto, a segurança do shopping conseguiu dispersar a confusão sem ferimentos graves.",
  ". Nenhuma das partes teve suas contas oficiais suspensas pelas plataformas em decorrência do caso.",
  ". O engajamento das redes de todos os citados teve um aumento expressivo no período.",
  ". Fãs de MC Paiva saíram em defesa do artista em suas páginas de comentários.",
  ". Seguidores de Malévola manifestaram apoio contínuo às suas declarações.",
  ". A cobertura jornalística de portais de entretenimento enfatizou a importância do diálogo.",
  ". O evento tornou-se um dos episódios de maior repercussão envolvendo influenciadores no ano.",
  ". Após o pico de repercussão, as declarações públicas sobre o tema foram gradualmente encerradas.",
  ". MC Paiva deu continuidade às suas apresentações e lançamentos musicais na sequência.",
  ". Malévola Alves prosseguiu com sua rotina de criação de conteúdo para a internet.",
  ". O link disposto no topo da página leva direto à matéria em vídeo com a cobertura do caso.",
  ". O registro histórico do caso permanece disponível em arquivos e reportagens da internet."
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("info-list");

  informacoes.forEach(item => {
    const card = document.createElement("div");
    card.className = "info-card";

    const text = document.createElement("p");
    text.className = "info-text";
    text.textContent = item;

    card.appendChild(text);
    container.appendChild(card);
  });
});