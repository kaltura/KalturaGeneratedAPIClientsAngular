
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFileContainer } from './KalturaFileContainer';
import { KalturaVirusScanJobResult } from './KalturaVirusScanJobResult';
import { KalturaVirusFoundAction } from './KalturaVirusFoundAction';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaVirusScanJobDataArgs  extends KalturaJobDataArgs {
    fileContainer? : KalturaFileContainer;
	flavorAssetId? : string;
	scanResult? : KalturaVirusScanJobResult;
	virusFoundAction? : KalturaVirusFoundAction;
}


export class KalturaVirusScanJobData extends KalturaJobData {

    fileContainer : KalturaFileContainer;
	flavorAssetId : string;
	scanResult : KalturaVirusScanJobResult;
	virusFoundAction : KalturaVirusFoundAction;

    constructor(data? : KalturaVirusScanJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVirusScanJobData' },
				fileContainer : { type : 'o', subTypeConstructor : KalturaFileContainer, subType : 'KalturaFileContainer' },
				flavorAssetId : { type : 's' },
				scanResult : { type : 'en', subTypeConstructor : KalturaVirusScanJobResult, subType : 'KalturaVirusScanJobResult' },
				virusFoundAction : { type : 'en', subTypeConstructor : KalturaVirusFoundAction, subType : 'KalturaVirusFoundAction' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVirusScanJobData',KalturaVirusScanJobData);
