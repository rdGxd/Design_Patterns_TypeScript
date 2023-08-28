// Importando a classe ImageEditor do arquivo './image-editor' e a classe ImageEditorBackupManager do arquivo './image-editor-backup-manager'
import { ImageEditor } from './image-editor';
import { ImageEditorBackupManager } from './image-editor-backup-manager';

// Criando uma instância do ImageEditor com o caminho da imagem e o formato inicial
const imageEditor = new ImageEditor(`/media/image.png`, 'png');

// Criando uma instância do ImageEditorBackupManager com o ImageEditor
const backupManager = new ImageEditorBackupManager(imageEditor);

// Fazendo o backup do estado atual do ImageEditor
backupManager.backup();

// Convertendo o formato da imagem para 'gif'
imageEditor.convertFormatTo(`gif`);

// Fazendo outro backup após a conversão
backupManager.backup();

// Convertendo o formato da imagem para 'bmp'
imageEditor.convertFormatTo(`bmp`);

// Fazendo mais um backup após a segunda conversão
backupManager.backup();

// Convertendo o formato da imagem para 'jpg'
imageEditor.convertFormatTo(`jpg`);

// Fazendo o log das informações atuais do ImageEditor (formato 'jpg' neste ponto)
console.log(imageEditor); // jpg

// Desfazendo a última ação usando o backup
backupManager.undo();

// Fazendo o log das informações do ImageEditor após o desfazer (formato 'bmp' novamente)
console.log(imageEditor); // bmp

// Desfazendo novamente para o estado anterior
backupManager.undo();

// Fazendo o log das informações do ImageEditor após mais um desfazer (formato 'gif' novamente)
console.log(imageEditor); // gif

// Desfazendo novamente para o estado inicial
backupManager.undo();

// Fazendo o log das informações do ImageEditor após mais um desfazer (formato 'png' novamente)
console.log(imageEditor); // png

// Tentando desfazer quando não há mais mementos disponíveis
backupManager.undo(); // no mementos

// Fazendo o log das informações do ImageEditor após a tentativa de desfazer (formato 'png', sem alterações)
console.log(imageEditor); // png
