export class LanguagesFactory implements LanguageInterface {
  constructor(lang: string) {
    switch (lang) {
      case "en":
        return new UnitedStatesEnglishLanguage();
      case "pt":
        return new BrazilPortugueseLanguage();
      default:
        return new UnitedStatesEnglishLanguage();
    }
  }

  getLanguage(): Language {
    return {
      main_page: {
        title: {
          name: "Welcome to Marcos asdadasd",
          contact_now: "Contact Now",
          see_all_projects: "See All Proasdasdasdajects",
          description:
            "Hello! My name is Marcos de Albuquerque Cavalcanti, and I'm a developer with over 7 years of experience working with JavaScript and MongoDB. I specialize in building efficient, scalable, and user-focused web applications that deliver real value.",
        },
      },
      about_page: {
        title: "Hello I am Marcos Cavalcanti",
        location: "Software Developer Based in Spain",
        descriptions: {
          details: `As a software engineer for over seven years, Marcos Cavalcanti has extensive experience finding solutions for complex engineering problems and helping the team develop the product. His proficiency as a Full-Stack Developer complements his skills in architecting the system and planning the IT architecture.`,
        },
      },
      header_buttons: {
        contacts: "Contact",
        about: "About",
        projects: "Projects",
      },
    };
  }
}

interface LanguageInterface {
  getLanguage(): Language;
}

interface Language {
  main_page: {
    title: {
      name: string;
      contact_now: string;
      see_all_projects: string;
      description: string;
    };
  };
  about_page: {
    title: string;
    location: string;
    descriptions: {
      details: string;
    };
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
      main_page: {
        title: {
          name: "Welcome to Marcos Portfolio",
          contact_now: "Contact Now",
          see_all_projects: "See All Projects",
          description:
            "Hello! My name is Marcos de Albuquerque Cavalcanti, and I'm a developer with over 7 years of experience working with JavaScript and MongoDB. I specialize in building efficient, scalable, and user-focused web applications that deliver real value.",
        },
      },
      about_page: {
        title: "Hello I am Marcos Cavalcanti",
        location: "Software Developer Based in Spain",
        descriptions: {
          details: `As a software engineer for over seven years, Marcos Cavalcanti has extensive experience finding solutions for complex engineering problems and helping the team develop the product. His proficiency as a Full-Stack Developer complements his skills in architecting the system and planning the IT architecture.`,
        },
      },
      header_buttons: {
        contacts: "Contact",
        about: "About",
        projects: "Projects",
      },
    };
  }
}

class BrazilPortugueseLanguage implements LanguageInterface {
  constructor() {}
  getLanguage(): Language {
    return {
      main_page: {
        title: {
          name: "Bem vindo ao meu Portfólio",
          contact_now: "Entre em contato",
          see_all_projects: "Confira meus projetos",
          description:
            "Olá! Meu nome é Marcos de Albuquerque Cavalcanti e sou desenvolvedor com mais de 7 anos de experiência em JavaScript e MongoDB. Sou especializado na criação de aplicações web eficientes, escaláveis e focadas na experiência do usuário.",
        },
      },
      about_page: {
        title: "Olá, eu sou Marcos Cavalcanti",
        location: "Desenvolvedor de Software vivendo na Espanha",
        descriptions: {
          details:
            "Como engenheiro de software há mais de sete anos, Marcos Cavalcanti possui ampla experiência em encontrar soluções para problemas complexos de engenharia e em ajudar a equipe no desenvolvimento do produto. Sua proficiência como Desenvolvedor Full-Stack complementa suas habilidades em arquitetar sistemas e planejar a arquitetura de TI.",
        },
      },
      header_buttons: {
        contacts: "Contato",
        about: "Sobre",
        projects: "Projetos",
      },
    };
  }
}
