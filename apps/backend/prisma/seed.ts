import { PrismaClient } from '@prisma/client';
import { Campus, Role } from '@prisma/client';

const prisma = new PrismaClient();

const univ: {
  collegeName: string;
  campus: Campus;
  majors: string[];
}[] = [
  {
    collegeName: 'University College / 학부대학',
    campus: Campus.ALL,
    majors: [
      '인문과학계열',
      '사회과학계열',
      '자연과학계열',
      '공학계열',
      '자유전공계열',
    ],
  },
  {
    collegeName: 'College of Computing and Informatics / 소프트웨어융합대학',
    campus: Campus.ALL,
    majors: ['소프트웨어학과', '지능형소프트웨어학과', '글로벌융합학부'],
  },
  {
    collegeName: 'Institute for Convergence / 성균융합원',
    campus: Campus.ALL,
    majors: [
      '글로벌바이오메디컬공학과',
      '응용AI융합학부',
      '에너지학과홈페이지',
      '배터리학과',
    ],
  },
  {
    collegeName:
      'College of Confucian Studies and Eastern Philosophy / 유학대학',
    campus: Campus.HSSC,
    majors: [],
  },
  {
    collegeName: 'College of Liberal Arts / 문과대학',
    campus: Campus.HSSC,
    majors: [],
  },
  {
    collegeName: 'College of Social Sciences / 사회과학대학',
    campus: Campus.HSSC,
    majors: [],
  },
  {
    collegeName: 'College of Economics / 경제대학',
    campus: Campus.HSSC,
    majors: [],
  },
  {
    collegeName: 'Business School / 경영대학',
    campus: Campus.HSSC,
    majors: [],
  },
  {
    collegeName: 'College of Education / 사범대학',
    campus: Campus.HSSC,
    majors: [],
  },
  {
    collegeName: 'School of Art / 예술대학',
    campus: Campus.HSSC,
    majors: [],
  },
  {
    collegeName: 'College of Science / 자연과학대학',
    campus: Campus.NSC,
    majors: [],
  },
  {
    collegeName:
      'College of Information and Communication Engineering / 정보통신대학',
    campus: Campus.NSC,
    majors: [],
  },
  {
    collegeName: 'College of Engineering / 공과대학',
    campus: Campus.NSC,
    majors: [],
  },
  {
    collegeName: 'School of Pharmacy / 약학대학',
    campus: Campus.NSC,
    majors: [],
  },
  {
    collegeName: 'College of Biotechnology and Bioengineering / 생명공학대학',
    campus: Campus.NSC,
    majors: [],
  },
  {
    collegeName: 'College of Sport Science / 스포츠과학대학',
    campus: Campus.NSC,
    majors: [],
  },
  {
    collegeName: 'School of Medicine / 의과대학',
    campus: Campus.NSC,
    majors: [],
  },
];

async function major() {
  const createUniv = univ.map(async (college) => {
    const collegeId = await prisma.college.create({
      data: {
        campus: college.campus,
        collegeName: college.collegeName,
      },
      select: {
        id: true,
      },
    });

    await prisma.major.createMany({
      data: college.majors.map((majorName) => {
        return {
          collegeId: collegeId.id,
          majorName: majorName,
        };
      }),
    });
  });

  await Promise.all(createUniv);
}

async function user() {
  await prisma.user.create({
    data: {
      username: 'admin',
      password: 'PASSWORD',
      role: Role.Admin,
      majorId: 1,
      studentId: '2025313311',
      semester: 1,
    },
  });
}

async function main() {
  await major();
  await user();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  .finally(async () => {
    await prisma.$disconnect();
  });
