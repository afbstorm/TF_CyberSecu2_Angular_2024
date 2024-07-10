import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { ArticlesComponent } from "../articles/articles.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [CardModule, CurrencyPipe, DatePipe, ArticlesComponent, FieldsetModule, FormsModule, ButtonModule, InputNumberModule],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent {

  // Tableau qui va contenir notre liste de course
  listeArticle: article[] = [];

  // Composition d'un article par défaut
  article: article = {
    id: this.listeArticle.length + 1,
    prix: 0,
    nom: '',
    quantite: 0,
    date: new Date(),
  }

  totalPanier: number = 0;

  // Ajout d'article dans la liste
  onSubmit() {
    this.ajoutArticle(this.article);
  }

  // Méthode de calcul du total du panier
  // acc = accumulateur
  total(): void {
    this.totalPanier = this.listeArticle.reduce((acc, article) => acc + article.prix * article.quantite, 0)
  }

  // Méthode d'ajout dans le panier
  ajoutArticle(article: article) {
    // Vérification de l'existence de l'article en paramètre dans la liste
    // find return (dans ce cas-ci) l'article trouvé OU -1 (-1 équivaut à false)
    const existingArticle = this.listeArticle.find(item => item.nom === article.nom);
    if (existingArticle) {
      if (existingArticle.quantite === 5) {
        // Si l'article a une quantité de 5 on empêche l'ajout
        return;
      } else {
        existingArticle.quantite = (existingArticle.quantite || 1) + 1;
      }
    } else {
      this.listeArticle.push({...article, quantite: article.quantite});
    }

    this.total();
    this.resetForm();
  }

  // Méthode de suppression d'un article
  supprimeArticle(articleId: number) {
    const article = this.listeArticle.find(item => item.id === articleId);
    if (article && article.quantite && article.quantite > 1) {
      article.quantite--;
    } else {
      this.listeArticle = this.listeArticle.filter(item => item.id !== articleId);
    }
    this.total();
  }

  // Méthode de reset de l'article
  resetForm() {
    this.article = {
      id: this.listeArticle.length + 1,
      prix: 0,
      nom: '',
      quantite: 0,
      date: new Date(),
    }
  }
}

export interface article {
  id: number;
  prix: number;
  nom: string;
  quantite: number;
  date: Date;
}