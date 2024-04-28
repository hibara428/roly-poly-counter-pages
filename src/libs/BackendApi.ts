import {
  BaseApiResponse,
  Direction,
  DirectionCounts,
  OtherCounts,
  OtherObjects,
  UserInfo
} from '@/types'
import axios from 'axios'

class BackendApi {
  baseUrl: string

  /**
   * Constructor.
   */
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  /**
   * Get user by email.
   * @param email
   * @returns
   */
  async getUserByEmail(email: string): Promise<UserInfo> {
    const response = await axios.get(`${this.baseUrl}/users?email=${encodeURIComponent(email)}`)
    return response.data.data
  }

  /**
   * Add user.
   * @param email
   */
  async addUser(email: string) {
    const response = await axios.post(`${this.baseUrl}/users`, {
      email: email
    })
    return response.data.data
  }

  /**
   * Get roly-poly counts.
   * @param userId
   * @returns
   */
  async getRolyPolyCounts(userId: number): Promise<DirectionCounts> {
    const response = await axios.get(`${this.baseUrl}/roly-poly/${userId}`)
    return response.data.data
  }

  /**
   * Get roly-poly counts with date.
   * @param userId
   * @param year
   * @param month
   * @param day
   * @returns
   */
  async getRolyPolyCountsWithDate(
    userId: number,
    year: number,
    month: number,
    day: number
  ): Promise<DirectionCounts> {
    const response = await axios.get(`${this.baseUrl}/roly-poly/${userId}/${year}/${month}/${day}`)
    return response.data.data
  }

  /**
   * Count up roly-poly.
   * @param userId
   * @param direction
   * @returns
   */
  async countUpRolyPoly(userId: number, direction: Direction): Promise<BaseApiResponse> {
    const response = await axios.post(`${this.baseUrl}/roly-poly/${userId}`, {
      direction: direction
    })
    return response.data
  }

  /**
   * Get others counts.
   * @param userId
   * @returns
   */
  async getOthersCounts(userId: number): Promise<OtherCounts> {
    const response = await axios.get(`${this.baseUrl}/others/${userId}`)
    return response.data.data
  }

  /**
   * Get others counts with date.
   * @param userId
   * @param year
   * @param month
   * @param day
   * @returns
   */
  async getOthersCountsWithDate(
    userId: number,
    year: number,
    month: number,
    day: number
  ): Promise<OtherCounts> {
    const response = await axios.get(`${this.baseUrl}/others/${userId}/${year}/${month}/${day}`)
    return response.data.data
  }

  /**
   * Count up others.
   * @param userId
   * @param otherObject
   * @returns
   */
  async countUpOthers(userId: number, otherObject: OtherObjects): Promise<BaseApiResponse> {
    const response = await axios.post(`${this.baseUrl}/others/${userId}`, {
      object: otherObject
    })
    return response.data
  }
}

export default BackendApi
