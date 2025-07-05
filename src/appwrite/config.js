import config from "../config/config";
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class Service{
  client = new Client()
  databases
  bucket

  constructor(){
    this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
    
    this.databases = new Databases(this.client)
    this.bucket = new Storage(this.client)
  }

  async createPost({title,slug,content,featuredImage,status,userId}){
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug, 
        {
          title,
          content,
          featuredImage,
          status,
          userId
        }
      )
    } 
    catch (error) {
      throw error
    }
  }

  async updatePost({title,slug,content,featuredImage,status}){
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status
        }
      )
    } 
    catch (error) {
      throw error
    }
  }

  async deletePost(slug){
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      )
      return true
    } 
    catch (error) {
      throw error
    }
  }

  async getPost(slug){
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      )
    } 
    catch (error) {
      throw error
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]){
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        queries
      )
    } 
    catch (error) {
      throw error
    }
  }

  async uploadFile(file){
    try {
      return await this.bucket.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file,

      )
    } 
    catch (error) {
      throw error
    }
  }

  async deleteFile(fileId){
    try {
      return await this.bucket.deleteFile(
        config.appwriteBucketId,
        fileId
      )
    } 
    catch (error) {
      throw error
    }
  }

  async getFilePreview(fileId){
    return await this.bucket.getFilePreview(
      config.appwriteBucketId,
      fileId
    )
  }
}

const appwriteService = new Service()

export default appwriteService

