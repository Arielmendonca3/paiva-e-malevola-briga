const faqs = [
  {
    q: "1. Onde aconteceu a briga presencial entre MC Paiva e Malévola Alves?",
    a: "A briga física ocorreu na saída do cinema de um shopping em São Paulo."
  },
  {
    q: "2. Como tudo começou antes de irem para o shopping?",
    a: "A polêmica começou com uma reclamação da influenciadora Malévola sobre o valor cobrado por um salão de beleza."
  },
  {
    q: "3. Qual foi a reclamação original de Malévola?",
    a: "Ela postou nas redes sociais indignada ao ser cobrada em R$ 6.000 por um serviço de cabelo que achava que custaria R$ 2.800."
  },
  {
    q: "4. Como Sophia Florence (Soso Careca) entrou na história?",
    a: "Soso Careca, que é namorada de MC Paiva e cliente do mesmo salão, publicou vídeos defendendo o estabelecimento e criticando a atitude de Malévola."
  },
  {
    q: "5. Qual foi a resposta imediata de Malévola para Soso?",
    a: "Malévola respondeu mandando Soso 'cuidar dos chifres' e citou o namorado dela, o funkeiro MC Paiva."
  },
  {
    q: "6. Por que MC Paiva acabou entrando na discussão?",
    a: "Após ter seu nome envolvido na troca de farpas entre as influenciadoras, Paiva respondeu a uma mensagem privada questionando a situação."
  },
  {
    q: "7. Qual foi a fala polêmica atribuída a MC Paiva nas mensagens?",
    a: "Ao ser questionado sobre o desentendimento, MC Paiva teria perguntado 'Que mulher?', frase interpretada por Malévola como um ato de transfobia."
  },
  {
    q: "8. O que fez Malévola decidir ir até o shopping?",
    a: "Ao saber que Paiva e Soso estavam no cinema do shopping, Malévola foi até lá acompanhada de amigos para tirar satisfação pessoalmente."
  },
  {
    q: "9. Quem estava junto com MC Paiva no shopping?",
    a: "O cantor estava acompanhado de sua namorada, Soso Careca, e do influenciador Edu Becks."
  },
  {
    q: "10. Quem acompanhou Malévola Alves no confronto?",
    a: "Malévola foi ao local acompanhada de amigos e criadores de conteúdo, incluindo a influenciadora Ray Pugliesi."
  },
  {
    q: "11. O que aconteceu na saída do cinema?",
    a: "Houve bate-boca imediato, troca de ofensas verbais e o confronto rapidamente evoluiu para agressões físicas na frente dos frequentadores."
  },
  {
    q: "12. Que tipo de agressões foram gravadas em vídeo?",
    a: "As imagens registradas mostram troca de socos, empurrões, tapas e chutes entre os envolvidos."
  },
  {
    q: "13. Quem precisou intervir para separar a pancadaria?",
    a: "Seguranças do shopping e pessoas que passavam pelo local precisaram intervir para afastar os grupos."
  },
  {
    q: "14. O que Malévola gritou durante o confronto no shopping?",
    a: "Ela gritava perguntando se o cantor iria 'bater em mulher' e o acusou publicamente de transfobia durante o bate-boca."
  },
  {
    q: "15. Como MC Paiva se defendeu das acusações de transfobia?",
    a: "O funkeiro alegou que sua fala foi mal interpretada e que apenas perguntava a quem a mensagem se referia, sem intenção de ofender."
  },
  {
    q: "16. Qual foi o papel de Soso Careca no meio da briga?",
    a: "Soso tentou intervir para afastar as partes, mas acabou sendo empurrada e envolvida no empurra-empurra."
  },
  {
    q: "17. Quem é a amiga de Malévola que chamou Soso de 'sonsa'?",
    a: "Ray Pugliesi gravou vídeos no local disparando ofensas contra Soso Careca durante a confusão."
  },
  {
    q: "18. O que disse o influenciador Edu Becks sobre o ocorrido?",
    a: "Edu Becks relatou que foram surpreendidos na saída do cinema por um grupo que já os aguardava na porta para criar embate."
  },
  {
    q: "19. Como o caso repercutiu no X (antigo Twitter)?",
    a: "A briga ficou entre os assuntos mais comentados (Trending Topics), com diversos vídeos publicados por testemunhas."
  },
  {
    q: "20. O que disse o cabeleireiro citado no início da polêmica?",
    a: "Robson Souza afirmou ter ficado abalado com a exposição negativa do seu salão de beleza e com o constrangimento gerado."
  },
  {
    q: "21. Qual foi a justificativa do salão sobre o valor cobrado de R$ 6.000?",
    a: "O salão informou que o preço englobava múltiplos procedimentos de tratamento, corte e coloração realizados no cabelo da influenciadora."
  },
  {
    q: "22. Malévola se arrependeu da briga no shopping?",
    a: "Ela publicou vídeos afirmando que reagiu à transfobia e que não aceitaria esse tipo de comentário."
  },
  {
    q: "23. Onde o público pode ver as gravações da briga?",
    a: "Vários canais no YouTube e perfis de fofoca no TikTok e Instagram compilaram os vídeos na íntegra."
  },
  {
    q: "24. A briga virou meme nas redes sociais?",
    a: "Sim, diversos áudios e momentos do confronto viralizaram com dublagens e edições no TikTok."
  },
  {
    q: "25. Outros famosos se manifestaram sobre o caso?",
    a: "Sim, outros influenciadores comentaram o caso nas redes, incluindo trocas de farpas com personalidades como Jojo Todynho."
  },
  {
    q: "26. Houve registro policial da briga no shopping?",
    a: "Foram levantadas especulações sobre boletins de ocorrência por agressão e injúria, com assessoria dos envolvidos acompanhando."
  },
  {
    q: "27. Qual é o nome completo de Soso Careca?",
    a: "A influenciadora se chama Sophia Florence."
  },
  {
    q: "28. Quem é MC Paiva na cena musical?",
    a: "Davi Paiva, conhecido como MC Paiva ZS, é um dos principais nomes do funk ostentação de São Paulo."
  },
  {
    q: "29. Quantos seguidores os envolvidos ganharam com o caso?",
    a: "A visibilidade da polêmica gerou um pico temporário de engajamento e novos seguidores em todos os perfis envolvidos."
  },
  {
    q: "30. O shopping emitiu alguma nota oficial?",
    a: "A equipe de segurança do centro comercial atuou para conter o tumulto e dispersar os envolvidos para manter a ordem."
  },
  {
    q: "31. Por que o caso gerou tanto debate sobre transfobia?",
    a: "Porque o questionamento sobre a identidade de Malévola nas mensagens privadas reacendeu discussões sobre preconceito contra mulheres trans."
  },
  {
    q: "32. Qual a duração aproximada do tumulto no shopping?",
    a: "A confusão durou cerca de 10 a 15 minutos até a chegada da equipe de apoio e dispersão do público."
  },
  {
    q: "33. A briga foi gravada por clientes do shopping?",
    a: "Sim, dezenas de pessoas que passeavam no local usaram celulares para filmar o barraco de vários ângulos."
  },
  {
    q: "34. As postagens originais da discussão foram apagadas?",
    a: "A maioria dos Stories originais expirou ou foi removida, mas trechos foram gravados e republicados por terceiros."
  },
  {
    q: "35. O relacionamento de MC Paiva e Soso Careca continuou após a briga?",
    a: "O casal continuou aparecendo junto nas redes sociais e se apoiando após a repercussão."
  },
  {
    q: "36. O que o público achou do confronto no shopping?",
    a: "A opinião do público ficou dividida entre quem apoiava a reação de Malévola e quem criticava a violência no local público."
  },
  {
    q: "37. O vídeo sugerido no topo do site fala de qual canal?",
    a: "O link direciona para um vídeo no YouTube focado nos detalhes e na cobertura do caso."
  },
  {
    q: "38. Houve prejuízo material no shopping durante a briga?",
    a: "Não foram relatados danos graves às estruturas das lojas, apenas tumulto próximo à área do cinema."
  },
  {
    q: "39. Como a segurança do shopping agiu no momento?",
    a: "Os seguranças intervieram rapidamente para separar a luta física e escoltar as partes para fora do local."
  },
  {
    q: "40. Malévola Alves fez novas declarações nos dias seguintes?",
    a: "Sim, ela usou suas redes sociais para reforçar seu posicionamento e publicar novas alfinetadas."
  },
  {
    q: "41. MC Paiva interrompeu agenda de shows por causa do caso?",
    a: "Não, o cantor seguiu com seus compromissos musicais normalmente após os esclarecimentos nas redes."
  },
  {
    q: "42. Por que o vídeo do salão de beleza deu origem a tudo?",
    a: "Porque a discussão de preços gerou uma reação em cadeia de alfinetadas envolvendo a vida pessoal dos influenciadores."
  },
  {
    q: "43. A briga envolveu apenas os três principais nomes?",
    a: "Não, o tumulto envolveu também amigos e acompanhantes que estavam de ambos os lados no shopping."
  },
  {
    q: "44. Qual rede social teve o maior número de vídeos curtos do barraco?",
    a: "O TikTok concentrou o maior volume de edições e cortes com análises da confusão."
  },
  {
    q: "45. Como as páginas de fofoca cobriram o evento?",
    a: "Páginas do Instagram publicaram atualizações minuto a minuto conforme os vídeos saíam."
  },
  {
    q: "46. Houve conciliação amigável entre eles depois?",
    a: "Até o momento, não houve anúncio público de paz ou reconciliação entre MC Paiva e Malévola Alves."
  },
  {
    q: "47. A transmissão da briga foi feita ao vivo?",
    a: "Pessoas que estavam no shopping no momento da confusão abriram transmissões ao vivo para mostrar o desfecho."
  },
  {
    q: "48. Qual conselho muitos seguidores deram após o ocorrido?",
    a: "Muitos internautas comentaram que desacordos da internet não deveriam ter sido levados para agressão física no mundo real."
  },
  {
    q: "49. Por que este caso se tornou um dos mais falados do ano?",
    a: "Pela combinação de briga por valores em salão, exposed em redes sociais e confronto físico entre famosos em local público."
  },
  {
    q: "50. Onde posso assistir ao vídeo da matéria na íntegra?",
    a: "Basta clicar no card de destaque no início desta página para ser redirecionado diretamente para o YouTube."
  }
];

// Inserção dinâmica no HTML
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("faq-container");

  faqs.forEach(item => {
    const faqCard = document.createElement("div");
    faqCard.className = "faq-item";

    const question = document.createElement("div");
    question.className = "faq-question";
    question.textContent = item.q;

    const answer = document.createElement("div");
    answer.className = "faq-answer";
    answer.textContent = item.a;

    faqCard.appendChild(question);
    faqCard.appendChild(answer);
    container.appendChild(faqCard);
  });
});