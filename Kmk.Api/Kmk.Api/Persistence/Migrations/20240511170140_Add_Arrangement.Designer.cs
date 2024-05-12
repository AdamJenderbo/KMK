﻿// <auto-generated />
using Kmk.Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Kmk.Api.Migrations
{
    [DbContext(typeof(KmkContext))]
    [Migration("20240511170140_Add_Arrangement")]
    partial class Add_Arrangement
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.18")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Kmk.Api.Domain.Arrangements.Arrangement", b =>
                {
                    b.Property<int>("SerialNumber")
                        .HasColumnType("int");

                    b.Property<string>("Arranger")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Composer")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("SerialNumber");

                    b.ToTable("Arrangements");
                });

            modelBuilder.Entity("Kmk.Api.Domain.Users.User", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("FacebookAccessToken")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PictureUrl")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("User");
                });

            modelBuilder.Entity("Kmk.Api.Domain.Users.UserRole", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("Role")
                        .HasColumnType("int");

                    b.HasKey("UserId", "Role");

                    b.ToTable("UserRole");
                });

            modelBuilder.Entity("Kmk.Api.Domain.Users.UserRole", b =>
                {
                    b.HasOne("Kmk.Api.Domain.Users.User", null)
                        .WithMany("Roles")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Kmk.Api.Domain.Users.User", b =>
                {
                    b.Navigation("Roles");
                });
#pragma warning restore 612, 618
        }
    }
}