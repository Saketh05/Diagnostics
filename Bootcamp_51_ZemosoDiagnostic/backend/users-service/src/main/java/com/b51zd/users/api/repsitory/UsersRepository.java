package com.b51zd.users.api.repsitory;

import com.b51zd.users.api.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<User, String> {
}
