Já é suficiente!
Alice e Bob estavam de férias. Os dois tiraram muitas fotos dos lugares por onde passaram, e agora querem mostrar a Charlie toda a coleção. No entanto, Charlie não gosta dessas sessões, já que o motivo costuma se repetir. Ele não gosta de ver a Torre Eiffel 40 vezes. Ele diz a eles que só se sentará durante a sessão se eles mostrarem o mesmo motivo no máximo N vezes. Felizmente, Alice e Bob são capazes de codificar o motivo como um número. Você pode ajudá-los a remover números de forma que sua lista contenha cada número apenas até N vezes, sem alterar a ordem?

Tarefa
Dada uma lista lst e um número N, crie uma nova lista que contenha cada número de lst no máximo N vezes sem reordenar. Por exemplo, se N = 2, e a entrada for [1,2,3,1,2,1,2,3], você pega [1,2,3,1,2], solta o próximo [1,2 ] já que isso levaria a 1 e 2 sendo o resultado 3 vezes, e então levaria 3, o que leva a [1,2,3,1,2,3].

Exemplo
  deleteNth ([1,1,1,1],2) // return [1,1]
  
  deleteNth ([20,37,20,21],1) // return [20,37,21]