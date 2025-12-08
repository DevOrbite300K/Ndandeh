import { Component, signal } from '@angular/core';
import { MaterialModule } from '../../../utils/material';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Message {
  from: 'user' | 'bot';
  text: string;
}

@Component({
  selector: 'app-dialog-chat',
  imports: [MaterialModule, FormsModule, CommonModule],
  templateUrl: './dialog-chat.component.html',
  styleUrl: './dialog-chat.component.scss'
})
export class DialogChatComponent {

  // Liste des messages du chat (signal)
  messages = signal<Message[]>([
    { from: 'bot', text: "Bonjour 👋, comment puis-je vous aider aujourd’hui ?" }
  ]);

  // Texte tapé dans l’input
  currentMessage = signal('');

  // Réponses statiques du bot
  staticResponses: Record<string, string> = {
    "bonjour": "Bonjour ! Ravie de vous revoir 🌟",
    "salut": "Salut 👋 Que puis-je faire pour vous ?",
    "comment ça va": "Je vais très bien ! Merci 😊",
    "aide": "Je peux vous aider à comprendre les fonctionnalités ou résoudre un problème.",
    "merci": "Avec plaisir 😊"
  };

  // Envoi du message utilisateur
  sendMessage() {
    const text = this.currentMessage().trim();
    if (!text) return;

    // Ajouter message user
    this.messages.update(msgs => [...msgs, { from: 'user', text }]);

    // Clear input
    this.currentMessage.set('');

    // Simulation de réponse automatique après 3 sec
    setTimeout(() => {
      this.reply(text.toLowerCase());
    }, 3000);
  }

  // Réponse automatique en fonction de la question
  reply(question: string) {

    let response = "Désolé, je n’ai pas compris 🤔";

    for (const key of Object.keys(this.staticResponses)) {
      if (question.includes(key)) {
        response = this.staticResponses[key];
        break;
      }
    }

    this.messages.update(msgs => [...msgs, { from: 'bot', text: response }]);
  }
}
