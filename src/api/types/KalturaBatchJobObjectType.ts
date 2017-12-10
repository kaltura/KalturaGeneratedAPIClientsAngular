

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaBatchJobObjectType extends KalturaObjectBase {
    private _value : string;
    constructor( value?:string | number){
        super();
        this._value = value + '';
    }

    equals(obj : this) : boolean
    {
        return obj && obj.toString() === this._value;
    }

    toString(){
        return this._value;
    }

    static asset = new KalturaBatchJobObjectType('4');
	static category = new KalturaBatchJobObjectType('2');
	static dropFolderFile = new KalturaBatchJobObjectType('dropFolderXmlBulkUpload.DropFolderFile');
	static entry = new KalturaBatchJobObjectType('1');
	static entryDistribution = new KalturaBatchJobObjectType('contentDistribution.EntryDistribution');
	static fileSync = new KalturaBatchJobObjectType('3');
	static metadata = new KalturaBatchJobObjectType('metadata.Metadata');
	static metadataProfile = new KalturaBatchJobObjectType('metadata.MetadataProfile');
	static scheduledTaskProfile = new KalturaBatchJobObjectType('scheduledTask.ScheduledTaskProfile');
}
KalturaTypesFactory.registerType('KalturaBatchJobObjectType',KalturaBatchJobObjectType);