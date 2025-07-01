export class LanguagesFactory implements LanguageInterface {
  constructor(lang: string) {
    switch (lang) {
      case 'en':
        return new UnitedStatesEnglishLanguage();
      case 'pt':
        return new BrazilPortugueseLanguage();
      default:
        return new UnitedStatesEnglishLanguage();
    }
  }

  getLanguage() {
    return {
      title: {
        name: 'Welcome to Marcos asdadasd',
        contact_now: 'Contact Now',
        see_all_projects: 'See All Proasdasdasdajects',
        description:
          "Hello! My name is Marcos de Albuquerque Cavalcanti, and I'm a developer with over 7 years of experience working with JavaScript and MongoDB. I specialize in building efficient, scalable, and user-focused web applications that deliver real value.",
      },
      header_buttons: {
        contacts: 'Contact',
        about: 'About',
        projects: 'Projects',
      },
    };
  }
}

interface LanguageInterface {
  getLanguage(): Language;
}

interface Language {
  title: {
    name: string;
    contact_now: string;
    see_all_projects: string;
    description: string;
  };
  header_buttons: {
    contacts: string;
    about: string;
    projects: string;
  };
}

export class UnitedStatesEnglishLanguage implements LanguageInterface {
  constructor() {}
  getLanguage(): Language {
    return {
      title: {
        name: 'Welcome to Marcos Portfolio',
        contact_now: 'Contact Now',
        see_all_projects: 'See All Projects',
        description:
          "Hello! My name is Marcos de Albuquerque Cavalcanti, and I'm a developer with over 7 years of experience working with JavaScript and MongoDB. I specialize in building efficient, scalable, and user-focused web applications that deliver real value.",
      },
      header_buttons: {
        contacts: 'Contact',
        about: 'About',
        projects: 'Projects',
      },
    };
  }
}

class BrazilPortugueseLanguage implements LanguageInterface {
  constructor() {}
  getLanguage() {
    return {
      title: {
        name: 'Bem vindo ao meu Portfólio',
        contact_now: 'Entre em contato',
        see_all_projects: 'Confira meus projetos',
        description:
          'Olá! Meu nome é Marcos de Albuquerque Cavalcanti e sou desenvolvedor com mais de 7 anos de experiência em JavaScript e MongoDB. Sou especializado na criação de aplicações web eficientes, escaláveis e focadas na experiência do usuário.',
      },
      header_buttons: {
        contacts: 'Contato',
        about: 'Sobre',
        projects: 'Projetos',
      },
    };
  }
}
