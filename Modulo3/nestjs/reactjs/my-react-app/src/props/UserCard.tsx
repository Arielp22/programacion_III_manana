export default function UserCard({ user }) {
  return <div>{user.name} {user.lastName} - {user.age} años, 
      Dirección: {user.address}, 
      Teléfono: {user.phone}</div>;
}


