
Indicacions
1) Dibuixau un croquis de l’edifici. Aquest ha d’estar dividit en dos grans espais: l’àrea de vendes i el magatzem. Hi ha d’haver 3 portes: una de l’àrea de vendes a l’exterior, una altra del magatzem a l’exterior, i una tercera que interconnecti els dos espais. Per facilitar-te l’exercici 9 (descrit més endavant), convé que la porta de l’àrea de vendes estigui a un dels dos laterals del plànol (Est o Oest) i no a la part superior ni inferior (Nord o Sud).
2) Definiu 2 droppables que faran el paper de vigilants i 1 droppable que farà el paper de supervisors. Tots ells s’han de poder moure lliurement pel centre comercial arrossegant-los amb el ratolí, però l’aplicació no ha de permetre que el supervisor en surti. Els vigilants han de ser clarament distingibles del supervisor.
3) Definiu un draggable devora de la porta de vendes, que farà el paper de punt de vigilància. I un altre, devora la porta interior, que serà el punt de supervisió.
4) Quan hi hagi un vigilant dins el punt de vigilància, aquest últim ha de canviar de tonalitat. I,
quan hi hagi un supervisor dins el punt de supervisió, el punt de supervisió ha de canviar de tonalitat.
Una mica separats del croquis, definiu els controls següents:
5) Un sortable amb els principals departaments del centre (per exemple: Alimentació, Neteja, Roba i Electrònica). No cal que aquests departaments estiguin representats al croquis. La llista ha de permetre ordenar manualment els departaments, segons tenguin major o menor prioritat de vigilància. La llista es comunicaria al vigilant que no està a la porta, perquè la tengui en compte a l’hora de fer les rondes; però aquesta funcionalitat de comunicació no s’ha d’implementar.
6) Un acordió amb dos botons: Supervisor i Vigilants. En iniciar l’aplicació, els supervisors i els vigilants estaran dins el desplegable corresponent de l’acordió i l’usuari els haurà d’agafar d’allà. L’acordió s’ha de poder deixar amb tots els desplegables tancats. Tal i com està definida l’aplicació, el desplaçament del supervisor a dins el centre s’executarà bruscament; però aquest defecte estètic no es penalitzarà.
7) Un menú amb 3 opcions: Porta de l’àrea de vendes, Porta del magatzem i Porta interior. I, per a cada opció, 3 sub-opocions: Obrir, Tancar i Detenir. Excepte l’opció corresponent a la porta interior, que no tendrà la sub-opció de Detenir.
8) Un joc de 3 pestanyes per visualitzar, de forma no simultània, les càmeres del centre: Càmera 1, Càmera 2, i Càmera 3. Quan se seleccioni una pestanya, ha d’aparèixer una foto, que en el nostre exercici substituirà l’entrada de vídeo. Procurau que les 3 fotos tenguin les mateixes mides i el mateix format, i que siguin més o menys coherents amb el que podríem estar enregistrant en un centre comercial. El sistema de pestanyes ha de permetre ocultar totes les càmeres.
Un altre cop dins el croquis:
9) La porta de l’àrea de vendes ha de poder obrir-se, tancar-se i detenir-se amb el menú que heu definit a l’exercici 7. El sistema ha de ser un div estret que faci un efecte d’slide bloquejant i desbloquejant la porta.
10) La porta del magatzem ha de poder obrir-se, tancar-se i detenir-se amb el menú. El sistema ha de ser un div estret que faci un efecte de fade bloquejant i desbloquejant la porta.
11) La porta interior ha de poder obrir-se i tancar-se amb el menú. El sistema ha de ser un div estret que faci un efecte de show/hide bloquejant i desbloquejant la porta.
Només per als grups de 4:
12) Els punts de vigilància i supervisió han de recuperar la seva tonalitat original si queden desatesos.
13) Afegir un control addicional consistent en un panell de missatges que, quan correspon, mostri els missatges següents: «Totes les portes estan tancades» i/o «Els punts de vigilància i supervisió estan correctament atesos».
Tecnologies preferides
Les funcionalitats sol·licitades s’han d’implementar amb JQuery i JQuery UI. L’ús d’altres tecnologies (com Angular) només es poden utilitzar com a últim recurs, amb penalització sobre la nota.
Documentació
El codi del programa s’ha d’acompanyar d’una documentació que s’ajusti als esquemes vists a classe (manual d’usuari i guia del desenvolupador). Aquesta documentació ha d’estar escrita en català o en castellà. És obligatori utilitzar un corrector ortogràfic per a la redacció dels documents i repassar-los abans d’entregar.
També s’avaluarà que el codi contengui comentaris útils; que ajudin a entendre l'estructura del programa, el propòsit de cada bloc i funció, i aquells aspectes del codi font que no puguin quedar prou clars d'una altra manera.
Tots els identificadors que declareu vosaltres i tots els comentaris que escriviu al codi han d'estar en la mateixa llengua i dialecte que la documentació.
Format i terminis del lliurament
S’ha de crear una carpeta amb tot el codi font i una altra amb la documentació, comprimir-ho tot dins un zip i lliurar el zip a través de l’aula virtual. La documentació ha d’estar en format ODT.
La pràctica es pot entregar fins al dia 7 de maig, a les 23:55.
