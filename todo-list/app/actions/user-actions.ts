"use server";

export async function searchUsers(name: string) {
  const DB = [
    { id: 1, name: "David" },
    { id: 2, name: "Amilee" },
    { i: 3, name: "Chaly" },
  ];

  return DB.filter((user) => user.name.includes(name));
}
