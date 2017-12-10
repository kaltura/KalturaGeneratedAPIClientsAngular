
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFtpDropFolderBaseFilter, KalturaFtpDropFolderBaseFilterArgs } from './KalturaFtpDropFolderBaseFilter';

export interface KalturaFtpDropFolderFilterArgs  extends KalturaFtpDropFolderBaseFilterArgs {
    
}


export class KalturaFtpDropFolderFilter extends KalturaFtpDropFolderBaseFilter {

    

    constructor(data? : KalturaFtpDropFolderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFtpDropFolderFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFtpDropFolderFilter',KalturaFtpDropFolderFilter);
