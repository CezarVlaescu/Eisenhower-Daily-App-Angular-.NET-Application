﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application_Layer.Dtos.Auth
{
    public class RoleAssignmentDto
    {
        public int UserId { get; set; }
        public string? Role { get; set; }
    }
}
