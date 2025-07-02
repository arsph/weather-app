provider "aws" {
  region = "eu-west-1"
}

resource "aws_security_group" "weatherapp_sg" {
  name        = "weatherapp_sg"
  description = "Allow HTTP and SSH"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "weatherapp" {
  ami           = "ami-0faab6bdbac9486fb" # Amazon Linux 2 AMI (HVM), SSD Volume Type, eu-west-1
  instance_type = "t3.nano"
  security_groups = [aws_security_group.weatherapp_sg.name]

  user_data = <<-EOF
    #!/bin/bash
    yum update -y
    amazon-linux-extras install docker -y
    service docker start
    usermod -a -G docker ec2-user
    docker run -d -p 80:80 weather-app
  EOF

  tags = {
    Name = "weatherapp-instance"
  }
}

output "instance_ip" {
  value = aws_instance.weatherapp.public_ip
  description = "Public IP of the EC2 instance"
} 