import { environment } from 'src/environments/environment';
import { UserRole } from '../shared/auth.roles';
const adminRoot = environment.adminRoot;

export interface IMenuItem {
  id?: string;
  icon?: string;
  label: string;
  to: string;
  newWindow?: boolean;
  subs?: IMenuItem[];
  roles?: UserRole[];
}

const data: IMenuItem[] = [
  {
    icon: 'iconsminds-sand-watch-2',
    label: 'Tiempo para mi',
    to: `${adminRoot}/tiempo`,
    roles: [UserRole.Admin, UserRole.Editor]
  },
  {
    icon: 'simple-icon-like',
    label: 'Convenios',
    to: `${adminRoot}/convenios`,
     // roles: [UserRole.Editor],
    /*subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'Vida saludable',
        to: `${adminRoot}/second-menu/second`,
      },
    ],*/
  },
  {
    icon: 'iconsminds-heart',
    label: 'Equilibrio de vida',
    to: `${adminRoot}/vidaSaludable`,
  },
  {
    icon: 'iconsminds-friendster',
    label: 'Beneficios',
    to: `${adminRoot}/beneficios`,
  },
  {
    icon: 'iconsminds-crown-2',
    label: 'Reconocimientos',
    to: `${adminRoot}/reconocimientos`,
  },
  {
    icon: 'iconsminds-calendar-4',
    label: 'Eventos',
    to: `${adminRoot}/eventos`,
  },
  {
    icon: 'iconsminds-administrator',
    label: 'Administración',
    to: `${adminRoot}/admin`,
  },
  
];
export default data;
