const informacoes = [
  "01. O desentendimento público começou a partir de uma reclamação sobre o orçamento de um salão de beleza.",
  "02. A influenciadora Malévola Alves expôs sua insatisfação com a diferença de valores cobrados pelo serviço.",
  "03. O estabelecimento cobrou um valor superior ao esperado inicialmente por múltiplos procedimentos estéticos.",
  "04. A influenciadora Sophia Florence (Soso Careca) defendeu o salão de beleza publicamente nas redes.",
  "05. Sophia Florence era cliente do mesmo salão e saiu em defesa do trabalho dos profissionais.",
  "06. A discussão ganhou grande proporção com a troca de indiretas entre as criadoras de conteúdo.",
  "07. O cantor de funk MC Paiva teve seu nome citado durante as trocas de mensagens e vídeos.",
  "08. MC Paiva é um dos artistas de maior alcance na cena do funk paulista atual.",
  "09. Diante das menções, MC Paiva enviou mensagens para entender o motivo de seu nome estar envolvido.",
  "10. O teor das mensagens privadas vazadas gerou novos desentendimentos entre os envolvidos.",
  "11. Uma das frases das conversas gerou forte repercussão quanto à interpretação de identidade e respeito.",
  "12. Malévola Alves rebateu as falas do cantor alegando ter sido desrespeitada.",
  "13. O clima de tensão entre as partes migrou das redes sociais para um encontro presencial.",
  "14. O confronto presencial ocorreu na área externa do cinema de um shopping em São Paulo.",
  "15. O cantor MC Paiva estava no shopping acompanhado de sua namorada e de amigos.",
  "16. Malévola Alves também estava no centro comercial junto a um grupo de acompanhantes.",
  "17. O encontro gerou um bate-boca acalorado diante de diversos frequentadores do local.",
  "18. A discussão verbal no shopping evoluiu para um tumulto com empurrões e agressões.",
  "19. Pessoas que passeavam pelo shopping registraram o momento da confusão em vídeo.",
  "20. Os vídeos gravados por testemunhas mostram a tentativa de terceiros para conter os ânimos.",
  "21. A equipe de segurança do shopping foi acionada para intervir e afastar os grupos.",
  "22. Durante o ocorrido, palavras de ordem e acusações foram ditas publicamente no saguão.",
  "23. A influenciadora Ray Pugliesi, presente no local, também se manifestou em defesa de Malévola.",
  "24. O influenciador Edu Becks, que estava com MC Paiva, publicou sua versão dos fatos posteriormente.",
  "25. As imagens da confusão se espalharam rapidamente pelas plataformas digitais.",
  "26. O assunto permaneceu entre os mais comentados das redes sociais por vários dias.",
  "27. Páginas de entretenimento e cobertura de celebridades repercutiram cada desdobramento.",
  "28. MC Paiva usou suas redes sociais para se pronunciar e negar intenções ofensivas.",
  "29. O cantor afirmou que sua fala nas mensagens foi tirada do contexto original.",
  "30. Malévola Alves manteve seu posicionamento, afirmando que reagiu ao que considerou injusto.",
  "31. Sophia Florence lamentou a exposição e os desentendimentos gerados publicamente.",
  "32. O profissional do salão de beleza envolvido no início da história lamentou o impacto na imagem do local.",
  "33. O estabelecimento explicou que a tabela de preços considerava produtos e técnicas específicas.",
  "34. A discussão reacendeu debates nas redes sociais sobre conduta e limites na internet.",
  "35. O público se dividiu ao comentar as atitudes de cada um dos envolvidos.",
  "36. Diversos perfis no TikTok produziram análises e cronologias em vídeo sobre o acontecimento.",
  "37. Trechos das declarações dos envolvidos viraram áudios com alto número de dublagens.",
  "38. O caso demonstrou a rapidez com que desentendimentos virtuais podem escalar para o mundo presencial.",
  "39. Apesar do tumulto, a segurança do shopping conseguiu dispersar a confusão sem ferimentos graves.",
  "40. Nenhuma das partes teve suas contas oficiais suspensas pelas plataformas em decorrência do caso.",
  "41. O engajamento das redes de todos os citados teve um aumento expressivo no período.",
  "42. Fãs de MC Paiva saíram em defesa do artista em suas páginas de comentários.",
  "43. Seguidores de Malévola manifestaram apoio contínuo às suas declarações.",
  "44. A cobertura jornalística de portais de entretenimento enfatizou a importância do diálogo.",
  "45. O evento tornou-se um dos episódios de maior repercussão envolvendo influenciadores no ano.",
  "46. Após o pico de repercussão, as declarações públicas sobre o tema foram gradualmente encerradas.",
  "47. MC Paiva deu continuidade às suas apresentações e lançamentos musicais na sequência.",
  "48. Malévola Alves prosseguiu com sua rotina de criação de conteúdo para a internet.",
  "49. O link disposto no topo da página leva direto à matéria em vídeo com a cobertura do caso.",
  "50. O registro histórico do caso permanece disponível em arquivos e reportagens da internet."
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