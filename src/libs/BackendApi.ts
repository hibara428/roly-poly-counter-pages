import {
  BaseApiResponse,
  Direction,
  DirectionCounts,
  OtherCounts,
  OtherObjects,
  UserInfo
} from '@/types'
import { format } from '@formkit/tempo'
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
    const response = await axios.get(`${this.baseUrl}/users`, {
      params: {
        email: email
      }
    })
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
   *
   * @param userId
   * @param day
   * @returns
   */
  async getRolyPolyCounts(userId: number, day: Date): Promise<DirectionCounts> {
    const response = await axios.get(`${this.baseUrl}/roly-poly/${userId}`, {
      params: {
        day: format(day, 'YYYY-MM-DD')
      }
    })
    return response.data.data
  }

  /**
   * Count up roly-poly.
   *
   * @param userId
   * @param direction
   * @param day
   * @returns
   */
  async countUpRolyPoly(userId: number, direction: Direction, day: Date): Promise<BaseApiResponse> {
    const response = await axios.post(`${this.baseUrl}/roly-poly/${userId}`, {
      direction: direction,
      day: format(day, 'YYYY-MM-DD')
    })
    return response.data
  }

  /**
   * Get others counts.
   *
   * @param userId
   * @param day
   * @returns
   */
  async getOthersCounts(userId: number, day: Date): Promise<OtherCounts> {
    const response = await axios.get(`${this.baseUrl}/others/${userId}`, {
      params: {
        day: format(day, 'YYYY-MM-DD')
      }
    })
    return response.data.data
  }

  /**
   * Count up others.
   *
   * @param userId
   * @param otherObject
   * @param day
   * @returns
   */
  async countUpOthers(
    userId: number,
    otherObject: OtherObjects,
    day: Date
  ): Promise<BaseApiResponse> {
    const response = await axios.post(`${this.baseUrl}/others/${userId}`, {
      object: otherObject,
      day: format(day, 'YYYY-MM-DD')
    })
    return response.data
  }
}

export default BackendApi
