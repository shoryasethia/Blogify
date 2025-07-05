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

  async createPost({title,content,featuredImage,status,userId}){
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        ID.unique(), // Use auto-generated ID instead of slug
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
      console.error("Appwrite service :: createPost :: error", error);
      throw error
    }
  }

  async updatePost(documentId, {title,content,featuredImage,status}){
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        documentId,
        {
          title,
          content,
          featuredImage,
          status
        }
      )
    } 
    catch (error) {
      console.error("Appwrite service :: updatePost :: error", error);
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
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      )
    } 
    catch (error) {
      console.error("Appwrite service :: getPost :: error", error);
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
      const result = await this.bucket.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      );
      return result;
    } 
    catch (error) {
      console.error("Appwrite service :: uploadFile :: error", error);
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
      console.error("Appwrite service :: deleteFile :: error", error);
      return false; // Don't throw on delete errors, just return false
    }
  }

  getFilePreview(fileId){
    return this.bucket.getFilePreview(
      config.appwriteBucketId,
      fileId
    );
  }

  getFileDownload(fileId){
    return this.bucket.getFileDownload(
      config.appwriteBucketId,
      fileId
    );
  }

  getFileView(fileId){
    return this.bucket.getFileView(
      config.appwriteBucketId,
      fileId
    );
  }
}

const appwriteService = new Service()

export default appwriteService

