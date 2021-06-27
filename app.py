from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def home():
    personagens = [
        {
            'idCheckbox': 'naruto',
            'value': 'naruto',
            'labelFor': 'naruto',
            'idCard': 'card-naruto',
            'idImagem': 'imagem-naruto',
            'srcImage': '../static/img/naruto-imagem.png',
            'idGif': 'gif-naruto',
            'srcGif': '../static/img/naruto.gif',
            'nomePersonagem': 'Naruto',
            'biografia': '''Morador da Vila Oculta da Folha (País do Fogo), os aldeões o
                        desprezavam por ter em seu corpo a Raposa de Nove Caudas (criatura
                        maléfica que atacou sua vila). Para ser reconhecido, ele sonha em
                        se tornar o líder da vila, o Hokage. Ao alcançar seu objetivo
                        tornou-se o sétimo Hokage.'''
        },
        {
            'idCheckbox': 'sasuke',
            'value': 'sasuke',
            'labelFor': 'sasuke',
            'idCard': 'card-sasuke',
            'srcImage': '../static/img/sasuke-imagem.png',
            'srcGif': '../static/img/sasuke-gif.gif',
            'nomePersonagem': 'Sasuke',
            'biografia': '''Sasuke é membro do clã Uchiha, que era uma habilidosa família de ninjas da Vila Oculta da Folha.
                        Seu objetivo inicial é vingar a destruição de seu clã, matando seu irmão Itachi Uchiha, que
                        assassinou quase todos sozinho. Inicialmente é frio e guiado por sua vingança, mas
                        posteriormente cria vínculos de amizades com outros personagens, particularmente com Naruto
                        Uzumaki, quem ele passa a considerar como rival.'''
        }
    ]
    personagens2 = [
        {
            'idCheckbox': 'gaara',
            'value': 'gaara',
            'labelFor': 'gaara',
            'idCard': 'card-gaara',
            'idGif': 'gif-gaara',
            'srcImage': '../static/img/gaara-imagem.png',
            'srcGif': '../static/img/gaara.gif',
            'nomePersonagem': 'Gaara',
            'biografia': '''Gaara é um shinobi afiliado a Sunagakure e é filho do líder de Sunagakure, o Quarto Kazekage. Ele
                        nasceu como hospedeiro de um demônio como parte da intenção de seu pai de ter uma arma para
                        restaurar sua aldeia. No entanto, uma combinação de ser condenado ao ostracismo pelos aldeões de
                        Sunagakure, sua incapacidade precoce de controlar a Besta com Cauda e a noção de que sua
                        falecida mãe o chamou de maldição na vila fez com que Gaara se tornasse um assassino implacável
                        que acredita que seu próprio propósito é matar seus inimigos.'''
        },
        {
            'idCheckbox': 'rocklee',
            'value': 'rocklee',
            'labelFor': 'rocklee',
            'idCard': 'card-rocklee',
            'idImagem': 'image-rocklee',
            'srcImage': '../static/img/rocklee-imagem.png',
            'srcGif': '../static/img/rock-lee.gif',
            'nomePersonagem': 'Rocklee',
            'idTitulo': 'h3-rocklee',
            'biografia': '''RockLee é um ninja afiliado a Vila Oculta da Folha e um membro do Time Guy, que consiste em si
                        mesmo, Neji Hyuga, Tenten, e Might Guy—o líder da equipe. Incapaz de usar a maioria das técnicas
                        ninja, Lee se dedica exclusivamente ao uso de taijutsu, técnicas similares as artes marciais.
                        Lee sonha em se tornar um "ninja esplêndido" apesar de suas inabilidades.'''
        }
    ]
    return render_template('index.html', personagens=personagens, personagens2=personagens2)


if __name__ == '__main__':
    app.run(debug=True)
