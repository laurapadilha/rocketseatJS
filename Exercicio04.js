function experiencia (anos) {
    if (anos <= 1) return 'Iniciante';
    if (anos > 1 && anos <= 3) return 'Intermediário';
    if (anos > 3 && anos <= 6) return 'Avançado';
    if (anos > 6) return 'Jedi Master';
   }

   var anosEstudo = 7;
   console.log(experiencia(anosEstudo));